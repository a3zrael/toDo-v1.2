using Microsoft.EntityFrameworkCore;

namespace ToDoPersistence;

public interface IToDoDbContext
{
    public DbSet<ToDo> toDos { get; set; }
    Task<int> SaveChangesAsync();
}
