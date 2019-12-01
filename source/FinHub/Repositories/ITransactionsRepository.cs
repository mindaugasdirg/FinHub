using System.Collections.Generic;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;

namespace FinHub.Repositories
{
    public interface ITransactionsRepository
    {
        Task<Transaction> CreateAsync(Transaction transaction);
        Task<Transaction> UpdateAsync(Transaction transaction);
        Transaction Get(int id);
        Task<IEnumerable<Transaction>> GetList(int groupId);
    }
}