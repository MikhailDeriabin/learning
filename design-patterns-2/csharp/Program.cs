using csharp.patterns;
using csharp.patterns.builder;

namespace csharp;

//dotnet run
class Program
{
    static void Main(string[] args)
    {
        IRunner runner = new Runner();
        runner.Run(3);
    }
}
