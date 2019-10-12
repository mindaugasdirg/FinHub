namespace FinHub.Models.EntityModels
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int GroupId { get; set; }
        public Group Group { get; set; }
        public bool Deleted { get; set; } = false;
    }
}