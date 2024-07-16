using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var _connection = builder.Configuration.GetConnectionString("connection");

builder.Services.AddDbContext<ToDoDbContext>(options => options.UseNpgsql(_connection));

var app = builder.Build();

app.MapGet("/api/todolist", async (ToDoDbContext db) => await db.toDos.ToListAsync());

/*app.MapGet("/api/todolist/{id}", async (string id, ToDoDbContext db) => {
    ToDo? td = await db.toDos.FirstOrDefaultAsync(td => td.Id == id);
    if (td == null) return Results.NotFound(new {message = "Пользователь не найден"});
    return Results.Json(td);
});

app.MapPost("/api/todolist", async (ToDo td, ToDoDbContext db) =>{
    await db.toDos.AddAsync(td);
    await db.SaveChangesAsync();
    return td;
});

app.MapDelete("/api/todolist/{id}", async (string id, ToDoDbContext db) => {
    ToDo? td = await db.toDos.FirstOrDefaultAsync(td => td.Id == id);
    if (td == null) return Results.NotFound(new {message = "Пользователь не найден"});
    db.toDos.Remove(td);
    await db.SaveChangesAsync();
    return Results.Json(td);
});

app.MapPut("/api/todolist/{id}", async (ToDo _td, ToDoDbContext db) => {
    var td = await db.toDos.FirstOrDefaultAsync(td => td.Id == _td.Id); 
    if(td == null) return Results.NotFound(new { message = "Пользователь не найден"});

    td.Title = _td.Title;
    td.Details = _td.Details;
    td.Completed = _td.Completed;
    await db.SaveChangesAsync();
    return Results.Json(td);
});*/

app.Run();
