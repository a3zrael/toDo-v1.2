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
    }
    public async Task DeleteToDo(Guid id){
        var td = new ToDo{
            Id = id
        };
        dbContext.toDos.Remove(td);
        await dbContext.SaveChangesAsync();
    }
    public async Task UpdateToDo(Guid id, ToDo _td){
        var td = await dbContext.toDos.FirstOrDefaultAsync(td => td.Id == _td.Id);

        td.Title = _td.Title;
        td.Completed = _td.Completed;
        td.Details = _td.Details;

        await dbContext.SaveChangesAsync();
    }
}
