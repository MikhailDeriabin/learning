namespace LINQ;

//Count the amount of items satisfying condition  
public class Count : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));
        
        var countOfLargerThan10 = nums.Count(num => num > 10);
        VariablePrinter.Print(countOfLargerThan10, nameof(countOfLargerThan10));
        
        var amountOfElems = nums.Count();
        VariablePrinter.Print(amountOfElems, nameof(amountOfElems));
    }
}