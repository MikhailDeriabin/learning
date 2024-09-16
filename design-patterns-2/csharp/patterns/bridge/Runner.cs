namespace csharp.patterns.bridge;

class Runner : IRunner
{
    public void Run(int exampleNumber)
    {
        var circle = new Circle(new VectorRenderer(), 10);

        circle.Draw();
        circle.Resize(2);
    }
}