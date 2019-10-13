using FinHub.Models.EntityModels;

namespace FinHub.Models.ViewModels
{
    public class UserViewModel : IViewModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }

        public static UserViewModel FromModel(User user)
        {
            return new UserViewModel()
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email
            };
        }
    }
}