using pets.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using pets.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<petsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("petsContext") ?? throw new InvalidOperationException("Connection string 'petsContext' not found.")));

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddControllersWithViews();

ContextMongodb.ConnectionString = builder.Configuration.GetSection("mongoConnection:ConnectionString").Value;
ContextMongodb.Database = builder.Configuration.GetSection("mongoConnection:Database").Value;
ContextMongodb.IsSSL = Convert.ToBoolean(builder.Configuration.GetSection("MongoConnection:IsSSL").Value);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
