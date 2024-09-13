namespace csharp.patterns.factories.abstractFactory;

public class Runner : IRunner
{
    public void Run(int exampleNumber)
    {
        var machine = new HotDrinkMachine();

        var myTea = machine.BrewDrink(HotDrinkMachine.DrinkToBrew.Tea, 12);
        myTea.Consume();

        var myCoffee = machine.BrewDrink(HotDrinkMachine.DrinkToBrew.Coffee, 3);
        myCoffee.Consume();
    }
}