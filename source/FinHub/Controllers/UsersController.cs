using System.Threading.Tasks;
using FinHub.Models.RequestModels;
using FinHub.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : CrudController
    {
        private readonly IUserService m_service;
        public UsersController(IUserService service)
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
        public IActionResult UpdateAsync(int id, [FromBody]UserRequestModel user)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = m_service.Update(id, user);

            return HandlePutResult(result);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAsync(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = m_service.Delete(id);

            return HandleDeleteResult(result);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = m_service.GetUser(id);

            return HandleGetResult(result, false);
        }

        [HttpGet()]
        public IActionResult GetList()
        {
            var result = m_service.GetList();

            return HandleGetResult(result, true);
        }
    }
}