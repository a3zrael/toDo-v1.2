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
        try{
            var td = dbContext.toDos.Where(_td => _td.Id == id);
            return await td.FirstOrDefaultAsync();
        }
        catch{
            throw new Exception("User not found!");
        }
    }
    public async Task AddToDo(ToDo td){
        await dbContext.toDos.AddAsync(td);
        await dbContext.SaveChangesAsync();
    }
    public async Task DeleteToDo(Guid id){
        try{
            var td = new ToDo{
                Id = id
            };
            dbContext.toDos.Remove(td);
            await dbContext.SaveChangesAsync();
        }
        catch{
            throw new Exception("User not found!");
        }
    }
    public async Task UpdateToDo(Guid id, ToDo td){
        try{
            var _td = await dbContext.toDos.FirstOrDefaultAsync(todo => todo.Id == id);

            _td.Title = td.Title;
            _td.Details = td.Details;
            _td.Completed = td.Completed;
            _td.Priority = td.Priority;

            await dbContext.SaveChangesAsync();
        }
        catch{
            throw new Exception("User not found!");
        }
    }
    public async Task<List<ToDo>> SortByPriority(){
        return await dbContext.toDos.OrderBy(p => p.Priority).ToListAsync();
    }
    public async Task<List<ToDo>> GetByTitle(string title){
        try{
            var td = dbContext.toDos.Where(_td => _td.Title.ToLower() == title.ToLower());
            return await td.ToListAsync();
        }
        catch{
            throw new Exception("User not found!");
        }
    }
    public async Task IsDone(Guid id){
        try{
            var td = await dbContext.toDos.FirstOrDefaultAsync(_td => _td.Id == id);
            td.Completed = true;
            await dbContext.SaveChangesAsync();
        }
        catch{
            throw new Exception("User not found!");
        }
    }
    public async Task EverythingIsDone(){
        try{
            var td = await dbContext.toDos.ToListAsync();
            foreach(var _td in td){
                _td.Completed = true;
            }
            await dbContext.SaveChangesAsync();
        }
        catch{
            throw new Exception("User not found!");
         }
    }
}
