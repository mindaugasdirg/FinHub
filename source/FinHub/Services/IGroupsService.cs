using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.EditModels;
using System.Security.Claims;

namespace FinHub.Services
{
    public interface IGroupsService
    {
        Task<ServiceResult<int>> CreateAsync(User admin, GroupRequestModel group);
        Task<ServiceResult<int>> DeleteAsync(ClaimsPrincipal user, int id);
        Task<ServiceResult<int>> GetGroup(ClaimsPrincipal user, int id);
        ServiceResult<int> GetList(string userId);
        Task<ServiceResult<int>> Update(ClaimsPrincipal user, int id, GroupRequestModel group);
    }
}