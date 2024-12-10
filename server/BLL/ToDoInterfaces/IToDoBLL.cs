using ToDoDTOs;

namespace ToDoInterfaces;

public interface IToDoBLL
{
    public Task<ToDoItemDTO> GetById(Guid id);
    public Task<List<ToDoItemDTO>> GetAll();
    public Task AddToDo(ToDoAddItemDTO td);
    public Task DeleteToDo(Guid id);
    public Task UpdateToDo(Guid id, ToDoAddItemDTO td);
    public Task<List<ToDoItemDTO>> SortByPriority();
    public Task<List<ToDoItemDTO>> GetByTitle(string title);
    public Task IsDone(Guid id);
    public Task EverythingIsDone();
}
