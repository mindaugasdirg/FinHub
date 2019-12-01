using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinHub.Models.EntityModels
{
    public class Transaction
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public string Description { get; set; }
        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        [Required]
        public Category Category { get; set; }
        public int GroupId { get; set; }
        [ForeignKey("GroupId")]
        [Required]
        public Group Group { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        [Required]
        public User User { get; set; }
        public bool Deleted { get; set; } = false;
    }
}