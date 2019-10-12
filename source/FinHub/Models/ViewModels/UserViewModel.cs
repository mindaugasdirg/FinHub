namespace FinHub.Models.ViewModels
{
    public class UserViewModel : IViewModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
    }
}