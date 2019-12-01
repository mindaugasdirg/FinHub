using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class TransactionsRepository : ITransactionsRepository
    {
        private readonly DatabaseContext dbContext;

        public TransactionsRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public async Task<Transaction> CreateAsync(Transaction transaction)
        {
            var createdTransaction = dbContext.Transactions.Add(transaction);

            if((await dbContext.SaveChangesAsync()) > 0)
                return createdTransaction.Entity;
            return null;
        }

        public async Task<Transaction> UpdateAsync(Transaction transaction)
        {
            var updatedTransaction = dbContext.Transactions.Update(transaction);

            if((await dbContext.SaveChangesAsync()) > 0)
                return updatedTransaction.Entity;
            return null;
        }

        public Transaction Get(int id)
        {
            return dbContext.Transactions
                .Include(t => t.Category)
                .Where(c => c.Id == id).FirstOrDefault();
        }

        public async Task<IEnumerable<Transaction>> GetList(int groupId)
        {
            return await dbContext.Transactions
                .Include(t => t.Category)
                .Where(c => c.GroupId == groupId).ToListAsync();
        }
    }
}