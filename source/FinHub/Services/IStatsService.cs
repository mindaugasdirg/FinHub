using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models;

namespace FinHub.Services
{
    public interface IStatsService
    {
        Task<ServiceResult<string>> GetStat(ClaimsPrincipal user, int groupId, string stat);
    }
}