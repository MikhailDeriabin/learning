namespace LINQ;

//Are all item satisfy condition(s) 
public class All : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));
        
        var areAllLargerThan10 = nums.All(num => num > 10);
        VariablePrinter.Print(areAllLargerThan10, nameof(areAllLargerThan10));
    }
}