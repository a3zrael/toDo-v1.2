namespace ToDoDTOs;

public class ToDoAddItemDTO
{
    public string Title { get; set; } = "No title";
    public string? Details { get; set; }
    public bool Completed { get; set; } = false;
    public string Priority { get; set; }
}
