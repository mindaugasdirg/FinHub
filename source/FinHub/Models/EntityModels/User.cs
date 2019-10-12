using System.Collections.Generic;

namespace FinHub.Models.EntityModels
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public List<GroupUser> GroupUsers { get; set; }
        public bool Deleted { get; set; } = false;
    }
}