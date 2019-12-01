using FinHub.Models.EntityModels;

namespace FinHub.Models.ViewModels
{
    public class TransactionViewModel : IViewModel<int>
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public CategoryViewModel Category { get; set; }
        public int GroupId { get; set; }
        public string UserId { get; set; }

        public static TransactionViewModel FromModel(Transaction transaction)
        {
            return transaction is null ? null : new TransactionViewModel()
            {
                Id = transaction.Id,
                Amount = transaction.Amount,
                Description = transaction.Description,
                Category = CategoryViewModel.FromModel(transaction.Category),
                GroupId = transaction.GroupId,
                UserId = transaction.UserId
            };
        }
    }
}