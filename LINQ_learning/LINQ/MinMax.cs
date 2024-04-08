namespace LINQ;

//get min and max values
//It is recommended to implement IComparer<T> for classes, in that case u can get the whole object
public class MinMax : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));

        var min = nums.Min();
        VariablePrinter.Print(min, nameof(min));
        var max = nums.Max();
        VariablePrinter.Print(max, nameof(max));

        var persons = new Person[]
        {
            new Person{ Name = "lol", Age = 45, Id = 5},
            new Person{ Name = "Kek", Age = 10, Id = 9},
            new Person{ Name = "Lolka", Age = 30, Id = 1},
        };
        
        var youngestPersonAge = persons.Min(p => p.Age);
        VariablePrinter.Print(youngestPersonAge, nameof(youngestPersonAge));
    }
}