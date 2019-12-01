using FinHub.Models.EntityModels;

namespace FinHub.Models.ViewModels
{
    public class CategoryViewModel : IViewModel<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public GroupViewModel Group { get; set; }

        public static CategoryViewModel FromModel(Category category)
        {
            return category is null ? null : new CategoryViewModel()
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description,
                Group = GroupViewModel.FromModel(category.Group)
            };
        }
    }
}