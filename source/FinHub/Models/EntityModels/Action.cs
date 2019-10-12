namespace FinHub.Models.EntityModels
{
    public class Action
    {
        public int Id { get; set; }
        public int GroupId { get; set; }
        public Group Group { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string ActionType { get; set; }
        public string Description { get; set; }
        public bool Deleted { get; set; } = false;
    }
}