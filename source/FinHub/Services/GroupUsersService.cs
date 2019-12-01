using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Authorization;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace FinHub.Services
{
    public class GroupUsersService : IGroupUsersService
    {
        private readonly IGroupUsersRepository groupUsersRepository;
        private readonly IGroupsRepository groupsRepository;
        private readonly IAuthorizationService authorizationService;

        public GroupUsersService(IGroupUsersRepository repository, IGroupsRepository _groupsRepository, IAuthorizationService _authorizationService)
        {
            groupUsersRepository = repository;
            groupsRepository = _groupsRepository;
            authorizationService = _authorizationService;
        }

        public async Task<ServiceResult<int>> AddUser(string groupCode, User user)
        {
            var group = groupsRepository.Get(groupCode);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group does not exist");

            if(groupUsersRepository.GetCount(group.Id, user.Id) != 0)
                return ServiceResult<int>.Error(400, "User is already in group");

            var groupUser = new GroupUser()
            {
                GroupId = group.Id,
                UserId = user.Id
            };

            var result = await groupUsersRepository.CreateAsync(groupUser);

            if(result is null)
                return ServiceResult<int>.Error(500, "Error adding user to group");
            return ServiceResult<int>.Success((IViewModel<int>)null);
        }

        public async Task<ServiceResult<int>> RemoveUser(int groupId, User user)
        {
            var groupUser = groupUsersRepository.Get(groupId, user.Id);

            if(groupUser is null)
                return ServiceResult<int>.Error(404, "User is not in the group");

            groupUser.Deleted = true;

            var result = await groupUsersRepository.UpdateAsync(groupUser);

            return ServiceResult<int>.Success((IViewModel<int>)null);
        }

        public async Task<ServiceResult<string>> GetGroupUsers(ClaimsPrincipal user, int groupId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<string>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<string>.Error(401, "Unauthorized");

            var result = groupUsersRepository.GetGroupUsers(groupId);

            if(result is null || !result.Any())
                return ServiceResult<string>.Error(404, "No users were found");
            return ServiceResult<string>.Success(result.Select(UserViewModel.FromModel));
        }

        public async Task<ServiceResult<string>> GetGroupUser(ClaimsPrincipal user, int groupId, string userId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<string>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<string>.Error(401, "Unauthorized");

            var result = groupUsersRepository.GetGroupUser(groupId, userId);

            if(result is null)
                return ServiceResult<string>.Error(404, "User was not found");
            return ServiceResult<string>.Success(UserViewModel.FromModel(result));
        }

        public ServiceResult<int> GetUserGroups(string userId)
        {
            var result = groupUsersRepository.GetUserGroups(userId);

            if(result is null || !result.Any())
                return ServiceResult<int>.Error(404, "No groups were found");
            return ServiceResult<int>.Success(result.Select(GroupViewModel.FromModel));
        }
    }
}