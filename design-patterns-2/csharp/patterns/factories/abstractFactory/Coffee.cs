namespace csharp.patterns.factories.abstractFactory;

/// <summary>
/// Actual product
/// </summary>
public class Coffee : IHotDrink
{
    public void Consume()
    {
        Console.WriteLine("Coffee drink");
    }
}