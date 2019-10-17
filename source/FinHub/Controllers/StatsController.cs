using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    public class StatsController : CrudController
    {
        public IActionResult GetStats(int groupId)
        {
            return Ok("stats");
        }
    }
}