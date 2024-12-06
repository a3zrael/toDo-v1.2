namespace ToDoInterfacesDAL;

public interface IToDoDAO
{
    public Task<ToDo> GetById(Guid id);
    public Task<List<ToDo>> GetAll();
    public Task AddToDo(ToDo td);
    public Task DeleteToDo(Guid id);
    public Task UpdateToDo(Guid id, ToDo td);
    public Task<List<ToDo>> SortByPriority();
    public Task<List<ToDo>> GetByTitle(string title);
    public Task IsDone(Guid id);
    public Task EverythingIsDone();
}
