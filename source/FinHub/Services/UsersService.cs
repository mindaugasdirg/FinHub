using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.RequestModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;

namespace FinHub.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository UsersRepository;

        public UsersService(IUsersRepository repository)
        {
            UsersRepository = repository;
        }

        public async Task<ServiceResult> CreateAsync(UserRequestModel user)
        {
            if(UsersRepository.GetCount(user.Username) != 0)
                return ServiceResult.Error(400, "User already exists");

            var userEntity = new User()
            {
                Email = user.Email,
                Username = user.Username,
                Role = Constants.USER_ROLE,
            };

            var result = await UsersRepository.Create(userEntity);

            if(result is null)
                return ServiceResult.Error(500, "Error saving to database");

            return ServiceResult.Success(UserViewModel.FromModel(result));
        }

        public async Task<ServiceResult> DeleteAsync(int id)
        {
            var user = UsersRepository.Get(id);

            if(user is null)
                return ServiceResult.Error(404, "User not found");

            user.Deleted = true;

            var result = await UsersRepository.Update(user);

            if(result is null)
                return ServiceResult.Error(500, "Error deleting user");
            return ServiceResult.Success(UserViewModel.FromModel(result));
        }

        public ServiceResult GetList()
        {
            throw new System.NotImplementedException();
        }

        public ServiceResult GetUser(int id)
        {
            var user = UsersRepository.Get(id);

            if(user is null)
                return ServiceResult.Error(404, "User does not exist");
            return ServiceResult.Success(UserViewModel.FromModel(user));
        }

        public async Task<ServiceResult> UpdateAsync(int id, UserRequestModel user)
        {
            if(id != user.Id)
                return ServiceResult.Error(403, "Cannot modify other users");

            var userEntity = UsersRepository.Get(id);

            if(userEntity is null)
                return ServiceResult.Error(404, "User not found");

            userEntity.Email = user.Email;
            userEntity.Username = user.Username;

            var result = await UsersRepository.Update(userEntity);

            if(result is null)
                return ServiceResult.Error(500, "Error updating user");
            return ServiceResult.Success(UserViewModel.FromModel(result));
        }
    }
}