using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    public class ActionsController : CrudController
    {
        public ActionsController()
        {
        }

        [HttpGet]
        public IActionResult GetList(int groupId)
        {
            return Ok("action list");
        }

        [HttpGet("{id}")]
        public IActionResult GetItem(int groupId, int id)
        {
            return Ok("action item");
        }
    }
}