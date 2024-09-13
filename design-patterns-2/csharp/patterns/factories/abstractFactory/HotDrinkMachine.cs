namespace csharp.patterns.factories.abstractFactory;

public class HotDrinkMachine
{
    public enum DrinkToBrew
    {
        Coffee, Tea
    }

    private Dictionary<DrinkToBrew, IHotDrinkFactory> factories = [];

    public HotDrinkMachine()
    {
        factories.Add(DrinkToBrew.Coffee, new CoffeeFactory());
        factories.Add(DrinkToBrew.Tea, new TeaFactory());
    }

    public IHotDrink BrewDrink(DrinkToBrew drink, int amount)
    {
        return factories[drink].Create(amount);
    }
}