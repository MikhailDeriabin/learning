namespace Domain;

//The business entities, core of the app. Has no dependencies

public class Activity
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Venue { get; set; }

    //Add a reference table, u may also initialize it here,
    //so, when u request an Activity it will return an empty arr for attendees field, not null 
    public ICollection<ActivityAttendee> Attendees { get; set; } = new List<ActivityAttendee>();
}