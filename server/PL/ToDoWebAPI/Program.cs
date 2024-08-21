using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ToDoInterfaces;
using ToDoInterfacesDAL;
using ToDoPersistence;
using ToDoApplication;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "ToDo API",
        Description = "Hello HR!",
        TermsOfService = new Uri("https://example.com/terms"),
        Contact = new OpenApiContact
        {
            Name = "Example Contact",
            Url = new Uri("https://example.com/contact")
        },
        License = new OpenApiLicense
        {
            Name = "Example License",
            Url = new Uri("https://example.com/license")
        }
    });
});

var _connection = builder.Configuration.GetConnectionString("connection");

builder.Services.AddDbContext<IToDoDbContext, ToDoDbContext>(options => options.UseNpgsql(_connection));

builder.Services.AddScoped<IToDoDAO, SqlDAO>();
builder.Services.AddScoped<IToDoBLL, ToDoBusinessLogic>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
