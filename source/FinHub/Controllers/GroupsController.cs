using System.Threading.Tasks;
using FinHub.Models.EditModels;
using FinHub.Models.EntityModels;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class GroupsController : CrudController
    {
        private readonly IGroupsService groupsService;
        private readonly UserManager<User> usersManager;

        public GroupsController(IGroupsService service, UserManager<User> _usersManager)
        {
            groupsService = service;
            usersManager = _usersManager;
        }
        
        [HttpPost()]
        public async Task<IActionResult> CreateAsync([FromBody]GroupRequestModel group)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var admin = await usersManager.FindByNameAsync(User.Identity?.Name);

            var result = await groupsService.CreateAsync(admin, group);

            return HandlePostResult("groups", result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]GroupRequestModel group)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await groupsService.Update(User, id, group);
            
            return HandlePutResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var result = await groupsService.DeleteAsync(User, id);
            return HandleDeleteResult(result);
        }

        [HttpGet()]
        public async Task<IActionResult> GetList()
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await usersManager.FindByNameAsync(User.Identity?.Name);
            
            var result = groupsService.GetList(user.Id);
            return HandleGetResult(result, true);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var group = await groupsService.GetGroup(User, id);
            return HandleGetResult(group, false);
        }
    }
}