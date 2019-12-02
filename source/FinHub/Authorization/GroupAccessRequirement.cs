using Microsoft.AspNetCore.Authorization;

namespace FinHub.Authorization
{
    public class GroupAccessRequirement : IAuthorizationRequirement
    {
        public string Level { get; set; }
        // public DatabaseContext DbContext { get; set; }
    }
}