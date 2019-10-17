using FinHub.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    public class TransactionsController : CrudController
    {
        private readonly ITransactionService m_service;

        public TransactionsController(ITransactionService service)
        {
            m_service = service;
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