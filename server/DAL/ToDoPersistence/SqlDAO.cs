using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update;
using ToDoInterfacesDAL;

namespace ToDoPersistence;

public class SqlDAO : IToDoDAO
{
    private IToDoDbContext dbContext;
    public SqlDAO(IToDoDbContext context) {
        dbContext = context;
    }

    public async Task<List<ToDo>> GetAll(){
        return await dbContext.toDos.ToListAsync();
    }
    public async Task<ToDo> GetById(Guid id){
        var td = dbContext.toDos.Where(_td => _td.Id == id);
        return await td.FirstOrDefaultAsync();
    }
    public async Task AddToDo(ToDo td){
        await dbContext.toDos.AddAsync(td);
        await dbContext.SaveChangesAsync();
    }
    public async Task DeleteToDo(Guid id){
        var td = new ToDo{
            Id = id
        };
        dbContext.toDos.Remove(td);
        await dbContext.SaveChangesAsync();
    }
    public async Task UpdateToDo(Guid id, ToDo td){
        var _td = await dbContext.toDos.FirstOrDefaultAsync(todo => todo.Id == id);
        if (_td == null){
            throw new Exception("User not found");
        }

        _td.Title = td.Title;
        _td.Details = td.Details;
        _td.Completed = td.Completed;    

        await dbContext.SaveChangesAsync();
    }
}
