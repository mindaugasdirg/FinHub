using System.Threading.Tasks;
using FinHub.Models.EditModels;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("[controller]")]
    [AllowAnonymous]
    public class AuthenticateController : Controller
    {
        private readonly IUsersService m_service;

        public AuthenticateController(IUsersService service)
        {
            m_service = service;
        }

        [HttpPost()]
        public async Task<IActionResult> Login([FromBody]LoginModel login)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await m_service.Login(login);

            if(string.IsNullOrWhiteSpace(result))
                return Unauthorized("Incorrect username or password");

            return Ok(result);
        }
    }
}