using FinHub.Models.RequestModels;
using FinHub.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    public class CategoriesController : CrudController
    {
        private readonly ITransactionCategoryService m_service;

        public CategoriesController(ITransactionCategoryService service)
        {
            m_service = service;
        }

        [HttpPost()]
        public IActionResult CreateAsync([FromBody]CategoryRequestModel category)
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
        public IActionResult GetList([FromQuery]string name = "")
        {
            return Ok();
        }
    }
}