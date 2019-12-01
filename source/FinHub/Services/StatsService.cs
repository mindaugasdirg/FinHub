using System.Collections.Generic;
using FinHub.Models.StatsModels;
using FinHub.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace FinHub.Services
{
    public class StatsService : IStatsService
    {
        private readonly IStatsRepository repository;
        private readonly IAuthorizationService authorizationService;

        public StatsService(IStatsRepository _repository, IAuthorizationService _authorizationService)
        {
            repository = _repository;
            authorizationService = _authorizationService;
        }
        public IEnumerable<IStat> GetAllStats(int groupId)
        {
            throw new System.NotImplementedException();
        }

        public IStat GetStat(int groupId, string stat)
        {
            throw new System.NotImplementedException();
        }
    }
}