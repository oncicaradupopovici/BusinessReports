using Avocado.WebApi.Extensions;
using Avocado.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avocado.WebApi.ActionFilters
{
    public class ValidateModelActionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            if (actionContext.ModelState.IsValid == false)
            {
                var apiError = new ApiError
                {
                    Message = "The request is invalid.",
                    Validations = actionContext.ModelState.GetErrors()
                };

                actionContext.Result = new BadRequestObjectResult(apiError);
            }
        }
    }
}
