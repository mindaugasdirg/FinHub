namespace FinHub.Models.ViewModels
{
    public class ActionViewModel : IViewModel
    {
        public int Id { get; set; }
        public GroupViewModel Group { get; set; }
        public UserViewModel User { get; set; }
        public string ActionType { get; set; }
        public string Description { get; set; }
    }
}