using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;

namespace FinHub.Services
{
    public interface IGroupUsersService
    {
        Task<ServiceResult<int>> AddUser(string groupCode, User user);
        Task<ServiceResult<int>> RemoveUser(int groupId, User user);
        Task<ServiceResult<string>> GetGroupUsers(ClaimsPrincipal user, int groupId);
        Task<ServiceResult<string>> GetGroupUser(ClaimsPrincipal user, int groupId, string userId);
        ServiceResult<int> GetUserGroups(string userId);
    }
}