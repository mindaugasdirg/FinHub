using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    [Authorize]
    public class StatsController : CrudController
    {
        public IActionResult GetStats(int groupId)
        {
            return Ok("stats");
        }
    }
}