namespace LINQ;

//Is any item satisfy condition(s) 
public class Any : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));
        
        var isAnyLargerThan10 = nums.Any(num => num > 10 && num < 90);
        VariablePrinter.Print(isAnyLargerThan10, nameof(isAnyLargerThan10));

        var isNotEmpty = nums.Any();
        VariablePrinter.Print(isNotEmpty, nameof(isNotEmpty));
    }
}