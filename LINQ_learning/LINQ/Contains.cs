namespace LINQ;

//Is collection contains an item
//Remember that if u will be searching for o reference type item, that type should implement IEquatable<T> interface
//Otherwise only references will be compared and most probably u will not find the item
public class Contains : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));

        var is5Present = nums.Contains(5);
        VariablePrinter.Print(is5Present, nameof(is5Present));

        var persons = new Person[]
        {
            new Person{ Name = "lol", Age = 45, Id = 5},
            new Person{ Name = "Kek", Age = 10, Id = 9},
            new Person{ Name = "Lolka", Age = 30, Id = 1},
        };
        
        var isPersonPresent = persons.Contains(new Person{ Name = "lol"});
        VariablePrinter.Print(isPersonPresent, nameof(isPersonPresent));
    }
}

//This will work fine with Contains, because Name is used instead of reference
public class Person : IEquatable<Person>
{
    public string Name { get; set; }
    public int Age { get; set; }
    public int Id { get; set; }

    public bool Equals(Person? other)
    {
        if (ReferenceEquals(null, other)) return false;
        if (ReferenceEquals(this, other)) return true;
        return Name == other.Name;
    }

    public override bool Equals(object? obj)
    {
        if (ReferenceEquals(null, obj)) return false;
        if (ReferenceEquals(this, obj)) return true;
        if (obj.GetType() != GetType()) return false;
        return Equals((Person)obj);
    }

    public override int GetHashCode()
    {
        return Name.GetHashCode();
    }

    public override string ToString()
    {
        return $"[ Name: {Name} Age: {Age} Id: {Id}; ]";
    }
}