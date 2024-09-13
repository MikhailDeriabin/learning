namespace csharp.patterns.factories.innerFactory;

/// <summary>
/// Concreate product, which also holds a factory methods for creating its instances
/// Notice that the constructor can be set to private to be able to create instances only via factory methods
/// </summary>
class Point
{
    private Point(double x, double y)
    {
        this.x = x;
        this.y = y;
    }
    private double x, y;

    /// <summary>
    /// Inner factory.
    /// One of the ideas of the factory pattern is that client code does not call the constructor
    /// </summary>
    public static class Factory
    {
        //Notice that we can write different names of the arguments for easier use
        public static Point CreateCartesianPoint(double x, double y)
        {
            return new Point(x, y);
        }

        public static Point CreatePolarPoint(double rho, double theta)
        {
            return new Point(rho * Math.Cos(theta), rho * Math.Sin(theta));
        }
    }

    public override string ToString()
    {
        return $"{nameof(x)}: {x}, {nameof(y)}: {y}";
    }
}