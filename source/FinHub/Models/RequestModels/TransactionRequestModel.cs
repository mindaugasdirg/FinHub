namespace FinHub.Models.RequestModels
{
    public class TransactionRequestModel
    {
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int GroupId { get; set; }
        public int UserId { get; set; }
    }
}