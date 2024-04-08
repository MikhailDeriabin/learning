using API.Extensions;
using API.Middleware;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Persistence;

//Receives HTTP requests and responses to them, Depends on Application

//Use the dotnet watch --no-hot-reload command to run the app, dotnet watch alone works like shit

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers(opt =>
{
    var authPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
    //add [Authorize] to all controllers = end points
    //In order to disable authorization use [AllowAnonymous]
    opt.Filters.Add(new AuthorizeFilter(authPolicy));
});

//Use of custom extension method, which adds all needed services
builder.Services.AddApplicationServices(builder.Configuration);
//Use another custom extension for identifieng an user
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints => 
{
    endpoints.MapControllers();
});



// app.UseHttpsRedirection();
// app.UseAuthorization();
// app.MapControllers();

//Create scope with using, which means that when everything is done in the scope is gonna be deleted from RAM (Garbage collector called)
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    //Update the DB if needed = not exists => create, SQL updated => update
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    //The migrations are happening here
    await context.Database.MigrateAsync();
    await Seed.SeedData(context, userManager);
}
catch (Exception e)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(e, "Error during migration or data seeding");
}

app.Run();