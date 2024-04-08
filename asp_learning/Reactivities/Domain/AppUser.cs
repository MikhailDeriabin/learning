using Microsoft.AspNetCore.Identity;

namespace Domain;

public class AppUser : IdentityUser
{
    public string DisplayNAme { get; set; }
    public string Bio { get; set; }
    public ICollection<ActivityAttendee> Activities { get; set; }
}