namespace csharp.patterns.factories.innerFactory;

class Runner : IRunner
{
    public void Run(int exampleNumber)
    {
        var point1 = Point.Factory.CreateCartesianPoint(2, 4);
        var point2 = Point.Factory.CreatePolarPoint(2, 4);

        Console.WriteLine(point1);
        Console.WriteLine("--------------");
        Console.WriteLine(point2);
    }
}