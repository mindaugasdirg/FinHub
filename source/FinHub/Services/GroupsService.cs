using System;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.EditModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using FinHub.Authorization;

namespace FinHub.Services
{
    public class GroupsService : IGroupsService
    {
        private readonly IGroupsRepository groupsRepository;
        private readonly IGroupUsersService groupUsersService;
        private readonly IAuthorizationService authorizationService;

        public GroupsService(IGroupsRepository repository, IGroupUsersService service, IAuthorizationService _authorizationService)
        {
            groupsRepository = repository;
            groupUsersService = service;
            authorizationService = _authorizationService;
        }
        public async Task<ServiceResult<int>> CreateAsync(User admin, GroupRequestModel group)
        {
            if(groupsRepository.GetGroupsCount(group.Name) != 0)
                return ServiceResult<int>.Error(400, "Group already exists");

            var groupEntity = new Group()
            {
                Name = group.Name,
                Balance = 0.0M,
                GroupCode = group.Name.GetHashCode().ToString(),
                AdminId = admin.Id
            };

            var result = await groupsRepository.CreateAsync(groupEntity);

            if(result is null)
                return ServiceResult<int>.Error(500, "Error creating group");

            var addedUser = await groupUsersService.AddUser(result.GroupCode, admin);
            if(addedUser is null)
                return ServiceResult<int>.Error(500, "Error creating adding user to group");

            result.Admin = admin;
            result.AdminId = admin.Id;
            return ServiceResult<int>.Success(GroupViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> DeleteAsync(ClaimsPrincipal user, int id)
        {
            var group = groupsRepository.Get(id);

            if(group is null)
                return ServiceResult<int>.Error(404, "Group not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            group.Deleted = true;

            var result = await groupsRepository.UpdateAsync(group);

            if(result is null)
                return ServiceResult<int>.Error(500, "Error deleting group");

            return ServiceResult<int>.Success(GroupViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> GetGroup(ClaimsPrincipal user, int id)
        {
            var group = groupsRepository.Get(id);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Read);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            return ServiceResult<int>.Success(GroupViewModel.FromModel(group));
        }

        public ServiceResult<int> GetList(string userId)
        {
            var groups = groupUsersService.GetUserGroups(userId);

            if(groups is null || groups.Models is null || groups.Models.Count() == 0)
                return ServiceResult<int>.Error(404, "No groups were found");
            return ServiceResult<int>.Success(groups.Models);
        }

        public async Task<ServiceResult<int>> Update(ClaimsPrincipal user, int id, GroupRequestModel group)
        {
            var groupEntity = groupsRepository.Get(id);

            if(groupEntity is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            groupEntity.Name = group.Name;

            var result = await groupsRepository.UpdateAsync(groupEntity);

            if(result is null)
                return ServiceResult<int>.Error(500, "Could not update group");
            return ServiceResult<int>.Success(GroupViewModel.FromModel(result));
        }
    }
}