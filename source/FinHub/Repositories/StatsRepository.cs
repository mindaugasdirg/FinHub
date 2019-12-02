using System.Collections.Generic;
using System.Linq;
using FinHub.Models.StatsModels;
using FinHub.Models.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class StatsRepository : IStatsRepository
    {
        private readonly DatabaseContext dbContext;

        public StatsRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public AmountStat GetAverageTransaction(int groupId)
        {
            return new AmountStat()
            {
                Amount = dbContext.Transactions
                    .Where(t => t.GroupId == groupId)
                    .Select(t => t.Amount).Average()
            };
        }

        public UserAmountStat GetBiggestDonator(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmountStat() { User = UserViewModel.FromModel(t.Key), Amount = t.Select(v => v.Amount).Sum() })
                .OrderByDescending(u => u.Amount)
                .FirstOrDefault();
        }

        public UserAmountStat GetBiggestSpender(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmountStat() { User = UserViewModel.FromModel(t.Key), Amount = t.Select(v => v.Amount).Sum() })
                .OrderBy(u => u.Amount)
                .FirstOrDefault();
        }

        public UserAmountStat GetSmallestDonator(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmountStat() { User = UserViewModel.FromModel(t.Key), Amount = t.Select(v => v.Amount).Sum() })
                .OrderBy(u => u.Amount)
                .FirstOrDefault();
        }

        public UserAmountStat GetSmallestSpender(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmountStat() { User = UserViewModel.FromModel(t.Key), Amount = t.Select(v => v.Amount).Sum() })
                .OrderByDescending(u => u.Amount)
                .FirstOrDefault();
        }

        public IEnumerable<CategoryAmountStat> GetSpendingByCategories(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.Category)
                .Where(t => t.GroupId == groupId)
                .GroupBy(t => t.Category)
                .Select(g => new CategoryAmountStat() { Category = g.Key, Amount = g.Select(v => v.Amount).Sum() })
                .ToList();
        }

        public IEnumerable<UserAmountStat> GetSpendingByUsers(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmountStat() { User = UserViewModel.FromModel(t.Key), Amount = t.Select(v => v.Amount).Sum() })
                .ToList();
        }
    }
}