using FinHub.Models.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    public class CategoriesController : CrudController
    {
        public CategoriesController()
        {
        }

        [HttpPost()]
        public IActionResult CreateAsync()
        {
            return Ok("Created");
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