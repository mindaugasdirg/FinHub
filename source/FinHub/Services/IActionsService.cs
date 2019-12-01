using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models;

namespace FinHub.Services
{
    public interface IActionsService
    {
        Task<bool> CreateAsync(int groupId, string userId, string type, string description);
        Task<ServiceResult<int>> Get(ClaimsPrincipal user, int groupId, int actionId);
        Task<ServiceResult<int>> GetList(ClaimsPrincipal user, int groupId);
    }
}