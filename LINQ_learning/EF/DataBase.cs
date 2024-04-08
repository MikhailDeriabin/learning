using Microsoft.EntityFrameworkCore;

namespace EF;

public class MyDataBase : DbContext
{
    public MyDataBase() : base() {}
    
    public DbSet<Video> Videos { get; set; }
    public DbSet<Genre> Genres { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseNpgsql("Host=localhost:5432;Database=ef_dev;Username=ef_dev;Password=ef_dev");
}