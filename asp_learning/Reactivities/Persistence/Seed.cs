using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence;

public class Seed
{
    public static async Task SeedData(DataContext dataContext, UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var newUsers = new List<AppUser>
            {
                new AppUser{ DisplayNAme = "Bob", UserName = "bob", Email = "bob@test.com"},
                new AppUser{ DisplayNAme = "Tom", UserName = "tom", Email = "tom@test.com"},
                new AppUser{ DisplayNAme = "Jane", UserName = "jane", Email = "jane@test.com"},
            };

            foreach (var user in newUsers)
            {
                await userManager.CreateAsync(user, "Password1!");
            }
        }
        
        if(dataContext.Activities.Any())
            return;

        var activities = new List<Activity>
        {
            new Activity
            {
                Title = "Past Activity 1",
                Date = DateTime.UtcNow.AddMonths(-2),
                Description = "Activity 2 months ago",
                Category = "drinks",
                City = "London",
                Venue = "Pub",
            },
            new Activity
            {
                Title = "Past Activity 2",
                Date = DateTime.UtcNow.AddMonths(-1),
                Description = "Activity 1 month ago",
                Category = "culture",
                City = "Paris",
                Venue = "Louvre",
            },
            new Activity
            {
                Title = "Future Activity 1",
                Date = DateTime.UtcNow.AddMonths(1),
                Description = "Activity 1 month in future",
                Category = "culture",
                City = "London",
                Venue = "Natural History Museum",
            },
            new Activity
            {
                Title = "Future Activity 2",
                Date = DateTime.UtcNow.AddMonths(2),
                Description = "Activity 2 months in future",
                Category = "music",
                City = "London",
                Venue = "O2 Arena",
            },
            new Activity
            {
                Title = "Future Activity 3",
                Date = DateTime.UtcNow.AddMonths(3),
                Description = "Activity 3 months in future",
                Category = "drinks",
                City = "London",
                Venue = "Another pub",
            },
            new Activity
            {
                Title = "Future Activity 4",
                Date = DateTime.UtcNow.AddMonths(4),
                Description = "Activity 4 months in future",
                Category = "drinks",
                City = "London",
                Venue = "Yet another pub",
            },
            new Activity
            {
                Title = "Future Activity 5",
                Date = DateTime.UtcNow.AddMonths(5),
                Description = "Activity 5 months in future",
                Category = "drinks",
                City = "London",
                Venue = "Just another pub",
            },
            new Activity
            {
                Title = "Future Activity 6",
                Date = DateTime.UtcNow.AddMonths(6),
                Description = "Activity 6 months in future",
                Category = "music",
                City = "London",
                Venue = "Roundhouse Camden",
            },
            new Activity
            {
                Title = "Future Activity 7",
                Date = DateTime.UtcNow.AddMonths(7),
                Description = "Activity 2 months ago",
                Category = "travel",
                City = "London",
                Venue = "Somewhere on the Thames",
            },
            new Activity
            {
                Title = "Future Activity 8",
                Date = DateTime.UtcNow.AddMonths(8),
                Description = "Activity 8 months in future",
                Category = "film",
                City = "London",
                Venue = "Cinema",
            }
        };

        await dataContext.Activities.AddRangeAsync(activities);
        await dataContext.SaveChangesAsync();
    }
}