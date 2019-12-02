using System;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/users")]
    [Authorize]
    public class GroupsUsersController : CrudController
    {
        private readonly IGroupUsersService groupUsersService;
        private readonly UserManager<User> usersManager;

        public GroupsUsersController(IGroupUsersService service, UserManager<User> _usersManager)
        {
            groupUsersService = service;
            usersManager = _usersManager;
        }
        
        [HttpGet()]
        public async Task<IActionResult> GetUsers(int groupId)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var list = await groupUsersService.GetGroupUsers(User, groupId);
            return HandleGetResult(list, true);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUser(int groupId, string userId)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var list = await groupUsersService.GetGroupUser(User, groupId, userId.ToString());
            return HandleGetResult(list, false);
        }

        [HttpPost()]
        public async Task<IActionResult> AddUser([FromBody]string groupCode)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await usersManager.FindByNameAsync(User.Identity?.Name);

            var result = await groupUsersService.AddUser(groupCode, user);

            return HandlePostResult("", result);
        }

        [HttpDelete("userId")]
        public async Task<IActionResult> RemoveUser(int groupId, string userId)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await usersManager.FindByNameAsync(User.Identity?.Name);

            var result = await groupUsersService.RemoveUser(groupId, user);

            return HandleDeleteResult(result);
        }
    }
}