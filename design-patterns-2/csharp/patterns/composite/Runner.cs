namespace csharp.patterns.composite;

class Runner : IRunner
{
    public void Run(int exampleNumber)
    {
        var drawing = new GraphicObject { Name = "My Drawing" };
        drawing.Children.Add(new Square { Color = "Red" });
        drawing.Children.Add(new Circle { Color = "Blue" });

        var group = new GraphicObject();
        group.Children.Add(new Square { Color = "Yellow" });
        group.Children.Add(new Square { Color = "Pink" });

        drawing.Children.Add(group);

        Console.WriteLine(drawing);
    }
}