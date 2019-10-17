using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FinHub.Models.EntityModels
{
    public class User
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        public string Email { get; set; }
        [Required]
        public string Role { get; set; }
        public List<GroupUser> GroupUsers { get; set; }
        public bool Deleted { get; set; } = false;
    }
}