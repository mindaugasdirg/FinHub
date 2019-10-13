using FinHub.Models.EntityModels;

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

        public static TransactionViewModel FromModel(Transaction transaction)
        {
            return new TransactionViewModel()
            {
                Id = transaction.Id,
                Amount = transaction.Amount,
                Description = transaction.Description,
                Category = CategoryViewModel.FromModel(transaction.Category),
                Group = GroupViewModel.FromModel(transaction.Group),
                User = UserViewModel.FromModel(transaction.User)
            };
        }
    }
}