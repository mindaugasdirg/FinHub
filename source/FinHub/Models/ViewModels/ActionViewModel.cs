using FinHub.Models.EntityModels;

namespace FinHub.Models.ViewModels
{
    public class ActionViewModel : IViewModel<int>
    {
        public int Id { get; set; }
        public GroupViewModel Group { get; set; }
        public UserViewModel User { get; set; }
        public string ActionType { get; set; }
        public string Description { get; set; }

        public static ActionViewModel FromModel(Action action)
        {
            return action is null ? null : new ActionViewModel()
            {
                Id = action.Id,
                Group = GroupViewModel.FromModel(action.Group),
                User = UserViewModel.FromModel(action.User),
                ActionType = action.ActionType,
                Description = action.Description
            };
        }
    }
}