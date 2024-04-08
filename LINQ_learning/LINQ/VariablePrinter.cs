using System.Collections;

namespace LINQ;

public static class VariablePrinter
{
    public static void Print(object? variable, string pre="", string post="")
    {
        if (variable is null)
        {
            Console.WriteLine($"{pre} (null) null {post}"); 
            return;
        }
            
        
        IEnumerable enumerable = (variable as IEnumerable);
        if(enumerable != null)
        {
            var varValue = "";
            foreach(var item in enumerable)
                varValue += item + ", ";
            
            Console.WriteLine($"{pre}({variable.GetType()}) [ {varValue}] {post}");
            return;
        }
        
        Console.WriteLine($"{pre}({variable.GetType()}) {variable} {post}"); 
    }
}