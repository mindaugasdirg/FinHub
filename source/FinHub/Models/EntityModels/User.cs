using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace FinHub.Models.EntityModels
{
    public class User : IdentityUser
    {
        [Required]
        public string Role { get; set; }
        public List<GroupUser> GroupUsers { get; set; }
        public bool Deleted { get; set; } = false;
    }
}