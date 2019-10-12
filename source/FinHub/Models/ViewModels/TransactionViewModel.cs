namespace FinHub.Models.ViewModels
{
    public class TransactionViewModel : IViewModel
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public CategoryViewModel Category { get; set; }
        public GroupViewModel Group { get; set; }
        public UserViewModel User { get; set; }
    }
}