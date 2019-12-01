namespace FinHub.Models.EditModels
{
    public class TransactionRequestModel
    {
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
    }
}