using System.Linq;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    [Authorize]
    public class StatsController : CrudController
    {
        private readonly IStatsService service;

        public StatsController(IStatsService _service)
        {
            service = _service;
        }

        [HttpGet()]
        public IActionResult Test(int groupId)
        {
            return Ok("aaa");
        }

        [HttpGet("{stat}")]
        public async Task<IActionResult> GetStat(int groupId, string stat)
        {
            return HandleResult(await service.GetStat(User, groupId, stat));
        }

        protected IActionResult HandleResult(ServiceResult<string> result)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            if(result.Model is null)
                return Ok(result.Models.ToList());
            
            return Ok(result.Model);
        }
    }
}