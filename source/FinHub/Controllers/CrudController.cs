using System;
using FinHub.Models;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [ApiController]
    public class CrudController : Controller
    {
        protected IActionResult HandleError(ServiceResult result)
        {
            switch(result.ErrorCode)
            {
                case 400:
                    return BadRequest(result.ErrorMessage);
                case 403:
                    return BadRequest(result.ErrorMessage);
                case 404:
                    return BadRequest(result.ErrorMessage);
                case 409:
                    return Conflict(result.ErrorMessage);
                case 500:
                    return StatusCode(500, result.ErrorMessage);
            }

            throw new Exception("Unkown error code");
        }

        protected IActionResult HandleGetResult(ServiceResult result, bool isList)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            if(isList)
                Ok(result.Models);
            
            return Ok(result.Model);
        }

        protected IActionResult HandlePostResult(string resources, ServiceResult result)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            return Created($"/{resources}/{result.Model.Id}", result.Model);
        }

        protected IActionResult HandlePutResult(ServiceResult result) =>
            HandleGetResult(result, false);

        protected IActionResult HandleDeleteResult(ServiceResult result)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            return NoContent();
        }
    }
}
