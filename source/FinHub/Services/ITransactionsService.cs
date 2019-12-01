using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EditModels;

namespace FinHub.Services
{
    public interface ITransactionsService
    {
        Task<ServiceResult<int>> CreateAsync(int groupId, ClaimsPrincipal user, TransactionRequestModel transaction);
        Task<ServiceResult<int>> DeleteAsync(ClaimsPrincipal user, int groupId, int transactionId);
        Task<ServiceResult<int>> Get(ClaimsPrincipal user, int groupId, int transactionId);
        Task<ServiceResult<int>> GetList(ClaimsPrincipal user, int groupId);
        Task<ServiceResult<int>> UpdateAsync(ClaimsPrincipal user, int groupId, int transactionId, TransactionRequestModel transaction);
    }
}