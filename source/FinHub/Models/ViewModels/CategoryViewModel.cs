namespace FinHub.Models.ViewModels
{
    public class CategoryViewModel : IViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public GroupViewModel Group { get; set; }
    }
}