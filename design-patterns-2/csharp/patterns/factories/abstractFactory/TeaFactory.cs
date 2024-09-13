namespace csharp.patterns.factories.abstractFactory;

public class TeaFactory : IHotDrinkFactory
{
    public IHotDrink Create(int amount)
    {
        Console.WriteLine($"Put a tea bug and pour {amount} of water");
        return new Tea();
    }
}