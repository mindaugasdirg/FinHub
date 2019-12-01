using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.EditModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using FinHub.Authorization;

namespace FinHub.Services
{
    public class UsersService : IUsersService
    {
        private readonly UserManager<User> usersManager;
        private readonly SignInManager<User> signInManager;
        private readonly IGroupUsersRepository groupUsersRepository;
        private readonly IConfiguration configuration;

        public UsersService(UserManager<User> _usersManager, SignInManager<User> _signInManager, IGroupUsersRepository _groupUsersRepository,
            IConfiguration _configuration)
        {
            usersManager = _usersManager;
            signInManager = _signInManager;
            groupUsersRepository = _groupUsersRepository;
            configuration = _configuration;
        }

        public async Task<ServiceResult<string>> CreateAsync(UserRequestModel user)
        {
            if(!(await usersManager.FindByNameAsync(user.Username) is null))
                return ServiceResult<string>.Error(400, "User already exists");

            var userEntity = new User()
            {
                Email = user.Email,
                UserName = user.Username,
                Role = Constants.USER_ROLE,
            };

            var result = await usersManager.CreateAsync(userEntity, user.Password);

            if(!result.Succeeded)
                return ServiceResult<string>.Error(500, "Error saving to database");

            var createdUser = await usersManager.FindByEmailAsync(user.Email);
            return ServiceResult<string>.Success(UserViewModel.FromModel(createdUser));
        }

        public async Task<ServiceResult<string>> DeleteAsync(string id)
        {
            var user = await usersManager.FindByIdAsync(id);

            if(user is null)
                return ServiceResult<string>.Error(404, "User not found");

            if(id != user.Id)
                return ServiceResult<string>.Error(403, "Cannot modify other users");

            user.Deleted = true;

            var result = await usersManager.UpdateAsync(user);

            if(!result.Succeeded)
                return ServiceResult<string>.Error(500, "Error deleting user");
            return ServiceResult<string>.Success(UserViewModel.FromModel(user));
        }

        public async Task<ServiceResult<string>> GetUser(string id)
        {
            var user = await usersManager.FindByIdAsync(id);

            if(user is null)
                return ServiceResult<string>.Error(404, "User does not exist");

            if(id != user.Id)
                return ServiceResult<string>.Error(403, "Cannot view other users");

            return ServiceResult<string>.Success(UserViewModel.FromModel(user));
        }

        public async Task<ServiceResult<string>> UpdateAsync(string id, UserRequestModel user)
        {
            if(id != user.Id)
                return ServiceResult<string>.Error(403, "Cannot modify other users");

            var userEntity = await usersManager.FindByIdAsync(id);

            if(userEntity is null)
                return ServiceResult<string>.Error(404, "User not found");

            userEntity.Email = user.Email;
            userEntity.UserName = user.Username;

            var result = await usersManager.UpdateAsync(userEntity);

            if(!result.Succeeded)
                return ServiceResult<string>.Error(500, "Error updating user");
            return ServiceResult<string>.Success(UserViewModel.FromModel(userEntity));
        }

        public async Task<string> Login(LoginModel login)
        {
            var result = await signInManager.PasswordSignInAsync(login.UserName, login.Password, false, false);

            if(!result.Succeeded)
                return "";

            var user = await usersManager.FindByNameAsync(login.UserName);
            return GenerateJwtToken(user.UserName, user);
        }

        private string GenerateJwtToken(string userName, IdentityUser user)
        {
            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["SecurityKey"]));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                configuration["Issuer"],
                configuration["Issuer"],
                claims,
                DateTime.Now,
                DateTime.Now.Add(TimeSpan.FromHours(2)),
                cred);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}