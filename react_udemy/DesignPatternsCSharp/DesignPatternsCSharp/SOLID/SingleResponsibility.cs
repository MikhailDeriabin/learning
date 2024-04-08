namespace DesignPatternsCSharp.SOLID;

public class SingleResponsibility : IExample
{
    public void Demo()
    {
        var journal = new Journal();
        journal.AddEntry("First Entry");
        journal.AddEntry("Second Entry");
        journal.AddEntry("Third Entry");
        Console.WriteLine(journal);
    }
}

public class Journal
{
    private readonly List<string> _entries = new();
    private int _count = 0;

    public int AddEntry(string entry)
    {
        _entries.Add(entry);
        _count += 1;
        return _count;
    }
    
    public void RemoveEntry(int index)
    {
        _entries.RemoveAt(index);
    }

    public override string ToString()
    {
        return _entries.Aggregate((str, nextEntry) => $"{str}\n{nextEntry}");
    }
}