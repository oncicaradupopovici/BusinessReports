using Avocado.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avocado.Web.ActionFilters
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            var ex = context.Exception;
            if (ex is DbUpdateException && ex.InnerException != null)
                ex = ex.InnerException;

            var result = new ApiError { Message = ex.Message, Details = ex.ToString() };

            context.HttpContext.Response.StatusCode = 500;
            context.Result = new JsonResult(result);
            context.ExceptionHandled = true;

            base.OnException(context);
        }
    }
}
