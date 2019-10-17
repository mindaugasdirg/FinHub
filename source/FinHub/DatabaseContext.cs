using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<GroupUser> GroupUsers { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Action> Actions { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().HasQueryFilter(item => !item.Deleted);
            builder.Entity<Group>().HasQueryFilter(item => !item.Deleted);
            builder.Entity<GroupUser>().HasQueryFilter(item => !item.Deleted);
            builder.Entity<Category>().HasQueryFilter(item => !item.Deleted);
            builder.Entity<Transaction>().HasQueryFilter(item => !item.Deleted);
            builder.Entity<Action>().HasQueryFilter(item => !item.Deleted);
        }
    }
}