// See https://aka.ms/new-console-template for more information

using LINQ;

var programsToRun = new List<IRunnable>
{
    // new Any(),
    // new All(),
    // new Count(),
    // new Contains(),
    // new Order(),
    // new MinMax(),
    new Average(),
};

foreach (var program in programsToRun)
{
    Console.WriteLine($"------------ {program.GetType()} ------------");
    program.Run();
    Console.WriteLine("------------------------------");
}