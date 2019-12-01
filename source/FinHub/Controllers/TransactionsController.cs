using System.Threading.Tasks;
using FinHub.Models.EditModels;
using FinHub.Models.EntityModels;
using FinHub.Repositories;
using FinHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [Route("api/groups/{groupId}/[controller]")]
    [Authorize]
    public class TransactionsController : CrudController
    {
        private readonly ITransactionsService transactionsService;
        private readonly UserManager<User> usersManager;

        public TransactionsController(ITransactionsService service, UserManager<User> _usersManager)
        {
            transactionsService = service;
            usersManager = _usersManager;
        }

        [HttpPost()]
        public async Task<IActionResult> CreateAsync(int groupId, [FromBody]TransactionRequestModel transaction)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await transactionsService.CreateAsync(groupId, User, transaction);
            return HandlePostResult($"groups/{groupId}/transactions", result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int groupId, int id, [FromBody]TransactionRequestModel transaction)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await transactionsService.UpdateAsync(User, groupId, id, transaction);
            return HandlePutResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int groupId, int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await transactionsService.DeleteAsync(User, groupId, id);

            return HandleDeleteResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int groupId, int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await transactionsService.Get(User, groupId, id);
            return HandleGetResult(result, false);
        }

        [HttpGet()]
        public async Task<IActionResult> GetList(int groupId)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await transactionsService.GetList(User, groupId);
            return HandleGetResult(result, true);
        }
    }
}