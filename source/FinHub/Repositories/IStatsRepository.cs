using System;
using System.Collections.Generic;
using FinHub.Models.StatsModels;

namespace FinHub.Repositories
{
    public interface IStatsRepository
    {
        UserAmountStat GetBiggestSpender(int groupId);
        UserAmountStat GetSmallestSpender(int groupId);
        UserAmountStat GetBiggestDonator(int groupId);
        UserAmountStat GetSmallestDonator(int groupId);
        IEnumerable<UserAmountStat> GetSpendingByUsers(int groupId);
        AmountStat GetAverageTransaction(int groupId);
        IEnumerable<CategoryAmountStat> GetSpendingByCategories(int groupId);
    }
}