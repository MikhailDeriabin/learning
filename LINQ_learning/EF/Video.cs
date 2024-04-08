namespace EF;

public class Video
{
    public int Id;
    public string Name;
    public DateTime ReleaseDate;

    public ICollection<Genre> Genres;
}