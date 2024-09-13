namespace csharp.patterns.factories.abstractFactory;

public class CoffeeFactory : IHotDrinkFactory
{
    public IHotDrink Create(int amount)
    {
        Console.WriteLine($"Put a couple spoons of coffee and pour {amount} of water");
        return new Coffee();
    }
}