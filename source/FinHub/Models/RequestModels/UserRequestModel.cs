namespace FinHub.Models.RequestModels
{
    public class UserRequestModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RepeatedPassword { get; set; }
        public string Role { get; set; }
    }
}