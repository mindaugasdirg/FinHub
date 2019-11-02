using System.Threading.Tasks;
using FinHub.Models.RequestModels;
using FinHub.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : CrudController
    {
        private readonly IUsersService m_service;
        public UsersController(IUsersService service)
        {
            m_service = service;
        }

        [HttpPost()]
        public async Task<IActionResult> CreateAsync([FromBody]UserRequestModel user)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await m_service.CreateAsync(user);
            
            return HandlePostResult("users", result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]UserRequestModel user)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await m_service.UpdateAsync(id, user);

            return HandlePutResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await m_service.DeleteAsync(id);

            return HandleDeleteResult(result);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = m_service.GetUser(id);

            return HandleGetResult(result, false);
        }
    }
}