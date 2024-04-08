namespace LINQ;

//Sort a collection by given criteria
//It is also a good idea to implement IComparer<T> for classes, for easier ordering
public class Order : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));

        var orderedNums = nums.OrderBy(num => num);
        VariablePrinter.Print(orderedNums, nameof(orderedNums));

        var persons = new Person[]
        {
            new Person{ Name = "lol", Age = 45, Id = 5},
            new Person{ Name = "Kek", Age = 10, Id = 9},
            new Person{ Name = "Lolka", Age = 30, Id = 1},
        };
        
        var orderedPersonsDesc = persons.OrderByDescending(p => p.Name);
        VariablePrinter.Print(orderedPersonsDesc, nameof(orderedPersonsDesc));
        
        var orderedPersonsByMultipleFields = persons
            .OrderBy(p => p.Name)
            .ThenBy(p => p.Age)
            .ThenBy(p => p.Id);
        VariablePrinter.Print(orderedPersonsByMultipleFields, nameof(orderedPersonsByMultipleFields));
    }
}
