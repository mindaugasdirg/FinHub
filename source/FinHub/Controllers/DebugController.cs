using System.Threading.Tasks;
using FinHub.Models.EditModels;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace FinHub.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class DebugController : Controller
    {
        private readonly DebugService m_service;
        private readonly IConfiguration m_configuration;

        public DebugController(IConfiguration configuration, DebugService service)
        {
            m_service = service;
            m_configuration = configuration;
        }

        [HttpGet("table/{table}")]
        public IActionResult GetTable(string table)
        {
            if(!(m_configuration["DebugEnabled"] ?? "").Equals("true")) return Forbid();

            return Ok(m_service.GetTable(table));
        }

        [HttpPost("clear")]
        public async Task<IActionResult> ClearData()
        {
            if(!(m_configuration["DebugEnabled"] ?? "").Equals("true")) return Forbid();

            return Ok(await m_service.ClearData());
        }
    }
}