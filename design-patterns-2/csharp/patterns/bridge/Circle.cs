namespace csharp.patterns.bridge;

public class Circle : Shape
{
    public Circle(IRenderer renderer, float radius) : base(renderer)
    {
        this.radius = radius;
    }
    private float radius;

    public override void Draw()
    {
        renderer.RenderCircle(radius);
    }

    public override void Resize(float amount)
    {
        radius *= amount;
    }
}