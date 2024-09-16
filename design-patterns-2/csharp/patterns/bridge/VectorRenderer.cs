using csharp.patterns.bridge;

public class VectorRenderer : IRenderer
{
    public void RenderCircle(float radius)
    {
        Console.WriteLine("Drawing circle with vector lines");
    }
}