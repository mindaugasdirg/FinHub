using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using FinHub.Models.StatsModels;
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

        public decimal GetAverageTransaction(int groupId)
        {
            return dbContext.Transactions
                .Where(t => t.GroupId == groupId)
                .Select(t => t.Amount).Average();
        }

        public object GetBalanceByDays(int groupId, DateTime since, DateTime to)
        {
            throw new NotImplementedException();
        }

        public UserAmount GetBiggestDonator(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmount() { User = t.Key, Amount = t.Select(v => v.Amount).Sum() })
                .OrderByDescending(u => u.Amount)
                .FirstOrDefault();
        }

        public UserAmount GetBiggestSpender(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmount() { User = t.Key, Amount = t.Select(v => v.Amount).Sum() })
                .OrderBy(u => u.Amount)
                .FirstOrDefault();
        }

        public UserAmount GetSmallestDonator(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmount() { User = t.Key, Amount = t.Select(v => v.Amount).Sum() })
                .OrderBy(u => u.Amount)
                .FirstOrDefault();
        }

        public UserAmount GetSmallestSpender(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.Amount >= 0 && t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmount() { User = t.Key, Amount = t.Select(v => v.Amount).Sum() })
                .OrderByDescending(u => u.Amount)
                .FirstOrDefault();
        }

        public object GetSpendingByCategories(int groupId)
        {
            throw new NotImplementedException();
        }

        public object GetSpendingByCategory(int groupId, int categoryId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserAmount> GetSpendingByUser(int groupId, string userId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmount() { User = t.Key, Amount = t.Select(v => v.Amount).Sum() })
                .ToList();
        }

        public IEnumerable<UserAmount> GetSpendingByUsers(int groupId)
        {
            return dbContext.Transactions
                .Include(t => t.User)
                .Where(t => t.GroupId == groupId)
                .GroupBy(t => t.User)
                .Select(t => new UserAmount() { User = t.Key, Amount = t.Select(v => v.Amount).Sum() })
                .ToList();
        }
    }
}