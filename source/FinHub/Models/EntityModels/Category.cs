using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinHub.Models.EntityModels
{
    public class Category
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public int GroupId { get; set; }
        [ForeignKey("GroupId")]
        [Required]
        public Group Group { get; set; }
        public bool Deleted { get; set; } = false;
    }
}