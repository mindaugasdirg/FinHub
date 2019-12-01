using System.Threading.Tasks;
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
    public class ActionsController : CrudController
    {
        private readonly IActionsService actionsService;
        private readonly IAuthorizationService authorizationService;
        
        public ActionsController(IActionsService service, IAuthorizationService _authorizationService)
        {
            actionsService = service;
            authorizationService = _authorizationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetList(int groupId)
        {
            return HandleGetResult(await actionsService.GetList(User, groupId), true);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int groupId, int id)
        {
            return HandleGetResult(await actionsService.Get(User, groupId, id), false);
        }
    }
}