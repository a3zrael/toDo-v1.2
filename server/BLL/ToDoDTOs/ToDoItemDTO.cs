namespace ToDoDTOs;

public class ToDoItemDTO
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public string Details { get; set; } = "";
    public bool Completed { get; set; } = false;
}
