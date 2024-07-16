namespace ToDoInterfacesDAL;

public interface IToDoDAO
{
    public Task<ToDo> GetById(Guid id);
    public Task<List<ToDo>> GetAll();
    public Task AddToDo(ToDo td);
    public Task<ToDo> DeleteToDo(Guid id);
    public Task<ToDo> UpdateToDo(Guid id);
}
