using System.Collections.Generic;

namespace FinHub.Models.EntityModels
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Balance { get; set; }
        public string GroupCode { get; set; }
        public List<GroupUser> GroupUsers { get; set; }
        public List<Category> Categories { get; set; }
        public List<Transaction> Transactions { get; set; }
        public int AdminId { get; set; }
        public User Admin { get; set; }
        public bool Deleted { get; set; } = false;
    }
}