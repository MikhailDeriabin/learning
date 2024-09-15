namespace csharp.patterns.adapter;

class Runner : IRunner
{
    /// <summary>
    /// A list of rectangle we were asked to draw
    /// </summary>
    private readonly List<VectorObject> vectorObjects =
    [
        new VectorRectangle(1, 1, 20, 4),
        new VectorRectangle(5, 8, 10, 2)
    ];

    public void Run(int exampleNumber)
    {
        //Draw our rectangles
        foreach(var rectangle in vectorObjects)
        {
            foreach (var line in rectangle)
            {
                var pointsToDraw = new LineToPointAdapter(line);
                foreach (var point in pointsToDraw)
                {
                    DrawPoint(point);
                }
            }
        }
    }

    /// <summary>
    /// This method have complex logic of drawing
    /// The problem that it understands Points only, not VaectorObjects like VectorRectangle
    /// </summary>
    /// <param name="point"></param>
    private void DrawPoint(Point point){
        Console.WriteLine(".");
    }
}