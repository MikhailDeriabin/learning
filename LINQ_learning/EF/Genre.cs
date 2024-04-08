namespace EF;

public class Genre
{
    public byte Id;
    public string Name;
    
    public ICollection<Video> Videos;
}