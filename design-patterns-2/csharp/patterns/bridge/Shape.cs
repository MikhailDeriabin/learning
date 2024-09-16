namespace csharp.patterns.bridge;

public abstract class Shape
{
    public Shape(IRenderer renderer)
    {
        this.renderer = renderer;
    }
    protected IRenderer renderer;

    public abstract void Draw();
    public abstract void Resize(float amount);
}