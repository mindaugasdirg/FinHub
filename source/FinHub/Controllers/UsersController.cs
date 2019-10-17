using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : CrudController
    {
        public UsersController()
        {
        }

        [HttpPost()]
        public IActionResult CreateAsync()
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAsync()
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAsync(int id)
        {
            return NoContent();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok();
        }

        [HttpGet()]
        public IActionResult GetList()
        {
            return Ok();
        }
    }
}