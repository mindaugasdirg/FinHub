using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinHub.Models.EntityModels
{
    public class Group
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public decimal Balance { get; set; }
        [Required]
        public string GroupCode { get; set; }
        public List<GroupUser> GroupUsers { get; set; }
        public List<Category> Categories { get; set; }
        public List<Transaction> Transactions { get; set; }
        public int AdminId { get; set; }
        [ForeignKey("AdminId")]
        [Required]
        public User Admin { get; set; }
        public bool Deleted { get; set; } = false;
    }
}