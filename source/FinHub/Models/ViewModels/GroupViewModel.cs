using FinHub.Models.EntityModels;

namespace FinHub.Models.ViewModels
{
    public class GroupViewModel : IViewModel<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Balance { get; set; }
        public string GroupCode { get; set; }
        public UserViewModel Admin { get; set; }

        public static GroupViewModel FromModel(Group group)
        {
            return group is null ? null : new GroupViewModel()
            {
                Id = group.Id,
                Name = group.Name,
                Balance = group.Balance,
                GroupCode = group.GroupCode,
                Admin = UserViewModel.FromModel(group.Admin)
            };
        }
    }
}