using ToDoDTOs;

namespace ToDoInterfaces;

public interface IToDoBLL
{
    public Task<ToDoItemDTO> GetById(Guid id);
    public Task<List<ToDoItemDTO>> GetAll();
    public Task AddToDo(ToDoAddItemDTO td);
    public Task<ToDoItemDTO> DeleteToDo(Guid id);
    public Task<ToDoItemDTO> UpdateToDo(Guid id, ToDoItemDTO td);
}
