namespace FinHub.Authorization
{
    public static class GroupOperations
    {
        public static GroupAccessRequirement Read = new GroupAccessRequirement() { Level = nameof(Read) };
        public static GroupAccessRequirement Write = new GroupAccessRequirement() { Level = nameof(Write) };
    }
}