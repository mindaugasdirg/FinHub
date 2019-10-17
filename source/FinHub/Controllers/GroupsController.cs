using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/[controller]")]
    public class GroupsController : CrudController
    {
        public GroupsController()
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
        public IActionResult Delete(int id)
        {
            return NoContent();
        }

        [HttpGet()]
        public IActionResult GetList()
        {
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok();
        }
    }
}