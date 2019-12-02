using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EditModels;

namespace FinHub.Services
{
    public interface IUsersService
    {
        Task<ServiceResult<string>> CreateAsync(UserRequestModel user);
        Task<ServiceResult<string>> UpdateAsync(ClaimsPrincipal userClaims, string id, UserRequestModel user);
        Task<ServiceResult<string>> DeleteAsync(ClaimsPrincipal userClaims, string id);
        Task<ServiceResult<string>> GetUser(string id);
        Task<string> Login(LoginModel login);
    }
}