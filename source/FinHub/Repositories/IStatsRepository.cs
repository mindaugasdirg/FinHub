using System;
using System.Collections.Generic;
using FinHub.Models.StatsModels;

namespace FinHub.Repositories
{
    public interface IStatsRepository
    {
        UserAmount GetBiggestSpender(int groupId);
        UserAmount GetSmallestSpender(int groupId);
        UserAmount GetBiggestDonator(int groupId);
        UserAmount GetSmallestDonator(int groupId);
        IEnumerable<UserAmount> GetSpendingByUser(int groupId, string userId);
        IEnumerable<UserAmount> GetSpendingByUsers(int groupId);
        decimal GetAverageTransaction(int groupId);
        object GetSpendingByCategories(int groupId);
        object GetSpendingByCategory(int groupId, int categoryId);
        object GetBalanceByDays(int groupId, DateTime since, DateTime to);
    }
}