using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace FinHub.Authorization
{
    public class UserIsSelfAuthorizationHandler : AuthorizationHandler<UserIsSelfRequirement, string>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, UserIsSelfRequirement requirement, string resource)
        {
            if(GetSubjectClaim(context.User).Equals(resource)) context.Succeed(requirement);

            return Task.CompletedTask;
        }

        private string GetSubjectClaim(ClaimsPrincipal user) => user.Claims.Where(c => c.Type.Equals(AuthorizationConstants.SUB_CLAIM)).Select(s => s.Value).Single();
    }

    public class UserIsSelfRequirement : IAuthorizationRequirement {}
}