using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Authorization;
using FinHub.Models;
using FinHub.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace FinHub.Services
{
    public class StatsService : IStatsService
    {
        private readonly IStatsRepository repository;
        private readonly IAuthorizationService authorizationService;
        private readonly IGroupsRepository groupsRepository;

        public StatsService(IStatsRepository _repository, IGroupsRepository _groupsRepository, IAuthorizationService _authorizationService)
        {
            repository = _repository;
            authorizationService = _authorizationService;
            groupsRepository = _groupsRepository;
        }

        public async Task<ServiceResult<string>> GetStat(ClaimsPrincipal user, int groupId, string stat)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<string>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<string>.Error(401, "Only group admin can view statistics");
            
            switch(stat.ToLower())
            {
                case "average":
                    return ServiceResult<string>.Success(repository.GetAverageTransaction(groupId));
                case "biggestspender":
                    return ServiceResult<string>.Success(repository.GetBiggestSpender(groupId));
                case "smallestspender":
                    return ServiceResult<string>.Success(repository.GetSmallestSpender(groupId));
                case "biggestdonator":
                    return ServiceResult<string>.Success(repository.GetBiggestDonator(groupId));
                case "smallestdonator":
                    return ServiceResult<string>.Success(repository.GetSmallestDonator(groupId));
                case "users":
                    return ServiceResult<string>.Success(repository.GetSpendingByUsers(groupId));
                case "categories":
                    return ServiceResult<string>.Success(repository.GetSpendingByCategories(groupId));
                default:
                    return ServiceResult<string>.Error(404, "stat was not found");
            }
        }
    }
}