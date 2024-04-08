using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

//Provides an access to DB, depends on Domain only

//It uses dotnet-ef tool for making DB migrations (available via dotnet ef)

public class DataContext : IdentityDbContext<AppUser>
{
    public DataContext(DbContextOptions options) : base(options){}

    //Add SQL Table (based on class)
    public DbSet<Activity> Activities { get; set; }
    
    public DbSet<ActivityAttendee> ActivityAttendees { get; set; }

    //Override method from IdentityDbContext<AppUser>
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<ActivityAttendee>( x => x.HasKey(attendee => new {attendee.AppUserId, attendee.ActivityId}) );

        builder.Entity<ActivityAttendee>()
            .HasOne(u => u.AppUser)
            .WithMany(a => a.Activities)
            .HasForeignKey(aa => aa.AppUserId);
        
        builder.Entity<ActivityAttendee>()
            .HasOne(u => u.Activity)
            .WithMany(a => a.Attendees)
            .HasForeignKey(aa => aa.ActivityId);
    }
}