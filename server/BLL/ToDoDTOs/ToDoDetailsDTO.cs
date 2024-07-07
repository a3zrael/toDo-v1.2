namespace ToDoDTOs;

public class ToDoDetailsDTO
{
    public string Id { get; set; } = null!;
    public string Title { get; set; } = null!;
    public string Details { get; set; } = "";
    public bool Completed { get; set; } = false;
}
