using csharp.patterns.factories.innerFactory;

namespace csharp;

//dotnet run
class Program
{
    static void Main(string[] args)
    {
        var runner = new Runner();
        runner.Run(1);
    }
}
