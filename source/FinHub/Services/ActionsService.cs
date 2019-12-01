using System.Linq;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.EditModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using FinHub.Authorization;

namespace FinHub.Services
{
    public class ActionsService : IActionsService
    {
        private readonly IActionsRepository actionsRepository;
        private readonly IGroupsRepository groupsRepository;
        private readonly IAuthorizationService authorizationService;

        public ActionsService(IActionsRepository repository, IGroupsRepository _groupsRepository, IAuthorizationService _authorizationService)
        {
            actionsRepository = repository;
            groupsRepository = _groupsRepository;
            authorizationService = _authorizationService;
        }

        public async Task<bool> CreateAsync(int groupId, string userId, string type, string description)
        {
            var actionEntity = new Action()
            {
                Description = description,
                ActionType = type,
                UserId = userId,
                GroupId = groupId
            };

            var result = await actionsRepository.CreateAsync(actionEntity);

            return !(result is null);
        }

        public async Task<ServiceResult<int>> Get(ClaimsPrincipal user, int groupId, int actionId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");


            var action = actionsRepository.Get(actionId);

            if(action is null || action.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Action was not found");
            return ServiceResult<int>.Success(ActionViewModel.FromModel(action));
        }

        public async Task<ServiceResult<int>> GetList(ClaimsPrincipal user, int groupId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");
                
            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var result = await actionsRepository.GetList(groupId);

            if(result is null)
                return ServiceResult<int>.Error(404, "No actions were found");
            return ServiceResult<int>.Success(result.Select(ActionViewModel.FromModel));
        }
    }
}