namespace ToDoDTOs;

public class ToDoItemDTO
{
    public Guid Id { get; set; }
    public string Title { get; set; } = "No title";
    public string? Details { get; set; }
    public bool Completed { get; set; } = false;
    public string Priority { get; set; }
}
