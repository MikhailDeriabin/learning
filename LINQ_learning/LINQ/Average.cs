namespace LINQ;

//Calculate average value, only for numbers
public class Average : IRunnable
{
    public void Run()
    {
        var nums = MyCollections.Arrays<int>(20, 1, 50);
        VariablePrinter.Print(nums, nameof(nums));
        
        var average = nums.Average();
        VariablePrinter.Print(average, nameof(average));

    }
}