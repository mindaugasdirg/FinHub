using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EditModels;

namespace FinHub.Services
{
    public interface ICategoriesService
    {
        Task<ServiceResult<int>> CreateAsync(ClaimsPrincipal user, int groupId, CategoryRequestModel category);
        Task<ServiceResult<int>> DeleteAsync(ClaimsPrincipal user, int groupId, int categoryId);
        Task<ServiceResult<int>> Get(ClaimsPrincipal user, int groupId, int categoryId);
        Task<ServiceResult<int>> GetList(ClaimsPrincipal user, int groupId);
        Task<ServiceResult<int>> UpdateAsync(ClaimsPrincipal user, int groupId, int categoryId, CategoryRequestModel category);
    }
}