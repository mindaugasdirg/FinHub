using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.AspNetCore.Authorization;

namespace FinHub.Authorization
{
    public class GroupAccessAuthorizationHandler : AuthorizationHandler<GroupAccessRequirement, Group>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, GroupAccessRequirement requirement, Group resource)
        {
            if(requirement.Level == GroupOperations.Read.Level && IsMember(GetSubjectClaim(context.User), resource))
                context.Succeed(requirement);
            if(requirement.Level == GroupOperations.Write.Level && IsOwner(GetSubjectClaim(context.User), resource))
                context.Succeed(requirement);

            return Task.CompletedTask;
        }

        private bool IsOwner(string subject, Group group) => subject.Equals(group.AdminId);

        private bool IsMember(string subject, Group group) =>
            IsOwner(subject, group) || group.GroupUsers.Where(g => g.GroupId == group.Id && g.UserId.Equals(subject)).Any();

        private string GetSubjectClaim(ClaimsPrincipal user) => user.Claims
            .Where(c => c.Type.Equals(AuthorizationConstants.SUB_CLAIM))
            .Select(s => s.Value)
            .FirstOrDefault();
    }
}