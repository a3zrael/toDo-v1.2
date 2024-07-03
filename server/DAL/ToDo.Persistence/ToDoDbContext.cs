using Microsoft.EntityFrameworkCore;

public class ToDoDbContext : DbContext { 
    public DbSet<ToDo> toDos { get; set; } = null!;
    public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options) { 
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<ToDo>().HasData(
            new ToDo{ Id = "1", Title = "Работа", Details = "Сделать 2 задачи", Completed = false },
            new ToDo{ Id = "2", Title = "Учеба", Details = "Прочитать учебник", Completed = false },
            new ToDo{ Id = "3", Title = "Отдых", Details = "Пожарить шашлыки", Completed = true }
        );
    }
}
