namespace FinHub.Models.ViewModels
{
    public class GroupViewModel : IViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Balance { get; set; }
        public string GroupCode { get; set; }
        public UserViewModel Admin { get; set; }
    }
}