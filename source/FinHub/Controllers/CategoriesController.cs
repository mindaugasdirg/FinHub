using System.Threading.Tasks;
using FinHub.Models.EditModels;
using FinHub.Models.EntityModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    [Authorize]
    public class CategoriesController : CrudController
    {
        private readonly ICategoriesService categoriesService;

        public CategoriesController(ICategoriesService service)
        {
            categoriesService = service;
        }

        [HttpPost()]
        public async Task<IActionResult> CreateAsync(int groupId, [FromBody]CategoryRequestModel category)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await categoriesService.CreateAsync(User, groupId, category);
            return HandlePostResult($"groups/{groupId}/categories", result);
        }

        [HttpPut("{categoryId}")]
        public async Task<IActionResult> UpdateAsync(int groupId, int categoryId, [FromBody]CategoryRequestModel category)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await categoriesService.UpdateAsync(User, groupId, categoryId, category);
            return HandlePutResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int groupId, int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await categoriesService.DeleteAsync(User, groupId, id);

            return HandleDeleteResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int groupId, int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await categoriesService.Get(User, groupId, id);
            return HandleGetResult(result, false);
        }

        [HttpGet()]
        public async Task<IActionResult> GetList(int groupId)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await categoriesService.GetList(User, groupId);
            return HandleGetResult(result, true);
        }
    }
}