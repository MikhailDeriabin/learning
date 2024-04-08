using Identity_under_the_hood.Authorization;
using Microsoft.AspNetCore.Authorization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddAuthentication("MyCookieAuth").AddCookie(
    "MyCookieAuth",
    opt =>
    {
        opt.Cookie.Name = "MyCookieAuth";
    });

//Specify policies
builder.Services.AddAuthorization(opt =>
{
    opt.AddPolicy("MustBeHR", policy => policy
        .RequireClaim("Department", "HR")
        //Add a custom requirement
        //.Requirements.Add(new HRManagerRequirement(2))
    );
});

//Add a custom requirement handler as well
builder.Services.AddSingleton<IAuthorizationHandler, HRManagerRequirement.HRManagerRequirementHandler>();

builder.Services.AddHttpClient("OurWebAPI", client =>
{
    client.BaseAddress = new Uri("http://localhost:5238/");
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.Run();