using System.Collections.Generic;
using FinHub.Models.StatsModels;

namespace FinHub.Services
{
    public interface IStatsService
    {
        IEnumerable<IStat> GetAllStats(int groupId);
        IStat GetStat(int groupId, string stat);
    }
}