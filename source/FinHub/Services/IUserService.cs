using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.RequestModels;

namespace FinHub.Services
{
    public interface IUserService
    {
        Task<ServiceResult> CreateAsync(UserRequestModel user);
        Task<ServiceResult> UpdateAsync(int id, UserRequestModel user);
        Task<ServiceResult> DeleteAsync(int id);
        ServiceResult GetUser(int id);
        ServiceResult GetList();
    }
}