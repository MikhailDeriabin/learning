namespace csharp.patterns.factories.abstractFactory;

/// <summary>
/// Actual product
/// </summary>
public class Tea : IHotDrink
{
    public void Consume()
    {
        Console.WriteLine("This tea is really nice");
    }
}