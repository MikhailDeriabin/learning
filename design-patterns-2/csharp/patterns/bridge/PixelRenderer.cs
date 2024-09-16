using csharp.patterns.bridge;

public class PixelRenderer : IRenderer
{
    public void RenderCircle(float radius)
    {
        Console.WriteLine("Drawing circle with pixels");
    }
}