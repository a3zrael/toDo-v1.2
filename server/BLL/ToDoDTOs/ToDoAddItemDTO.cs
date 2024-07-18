namespace ToDoDTOs;

public class ToDoAddItemDTO
{
    public string Title { get; set; } = null!;
    public string Details { get; set; } = "";
    public bool Completed { get; set; } = false;
}
