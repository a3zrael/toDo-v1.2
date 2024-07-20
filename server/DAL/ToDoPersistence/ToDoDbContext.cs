using Microsoft.EntityFrameworkCore;
using ToDoPersistence;

public class ToDoDbContext : DbContext, IToDoDbContext {
    public DbSet<ToDo> toDos { get; set; } = null!;

    public ToDoDbContext (DbContextOptions<ToDoDbContext> options) : base(options) { 
        Database.EnsureCreated();
    }

    protected override void OnModelCreating (ModelBuilder modelBuilder) {
        /*modelBuilder.Entity<ToDo>().HasData(
            new ToDo { Title = "Govno", Details = "Eat govno", Completed = true },
            new ToDo { Title = "Mocha", Details = "drink mocha", Completed = true },
            new ToDo { Title = "pivo", Details = "drink vodka", Completed = true }
        );*/
        
        modelBuilder.Entity<ToDo>(entity => {
            entity.HasKey(x => x.Id);
            entity.HasIndex(x => x.Id).IsUnique();
        });
    }

    public Task<int> SaveChangesAsync() => base.SaveChangesAsync();
}
