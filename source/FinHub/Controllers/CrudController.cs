using System;
using System.Linq;
using FinHub.Models;
using FinHub.Models.EntityModels;
using Microsoft.AspNetCore.Mvc;

namespace FinHub.Controllers
{
    [ApiController]
    public class CrudController : Controller
    {
        protected IActionResult HandleError<T>(ServiceResult<T> result)
        {
            switch(result.ErrorCode)
            {
                case 400:
                    return BadRequest(result.ErrorMessage);
                case 401:
                    return Unauthorized(result.ErrorMessage);
                case 403:
                    return Forbid(result.ErrorMessage);
                case 404:
                    return NotFound(result.ErrorMessage);
                case 409:
                    return Conflict(result.ErrorMessage);
                case 500:
                    return StatusCode(500, result.ErrorMessage);
            }

            throw new Exception($"Unkown error code {result.ErrorCode}");
        }

        protected IActionResult HandleGetResult<T>(ServiceResult<T> result, bool isList)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            if(isList)
                return Ok(result.Models.ToList());
            
            return Ok(result.Model);
        }

        protected IActionResult HandlePostResult<T>(string resources, ServiceResult<T> result)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            return Created($"/{resources}/{result.Model.Id}", result.Model);
        }

        protected IActionResult HandlePutResult<T>(ServiceResult<T> result) =>
            HandleGetResult(result, false);

        protected IActionResult HandleDeleteResult<T>(ServiceResult<T> result)
        {
            if(!result.IsSuccess)
                return HandleError(result);

            return NoContent();
        }
    }
}
