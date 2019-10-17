using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinHub.Models.EntityModels
{
    public class GroupUser
    {
        [Required]
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        [Required]
        [ForeignKey("UserId")]
        public User User { get; set; }
        public int GroupId { get; set; }
        [ForeignKey("GroupId")]
        [Required]
        public Group Group { get; set; }
        public bool Deleted { get; set; } = false;
    }
}