using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinHub.Models.EntityModels
{
    public class Action
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public string ActionType { get; set; }
        [Required]
        public string Description { get; set; }
        public int GroupId { get; set; }
        [ForeignKey("GroupId")]
        [Required]
        public Group Group { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        [Required]
        public User User { get; set; }
        public bool Deleted { get; set; } = false;
    }
}