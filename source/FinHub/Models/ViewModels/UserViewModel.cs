using FinHub.Models.EntityModels;

namespace FinHub.Models.ViewModels
{
    public class UserViewModel : IViewModel<string>
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }

        public static UserViewModel FromModel(User user)
        {
            return user is null ? null : new UserViewModel()
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email
            };
        }
    }
}