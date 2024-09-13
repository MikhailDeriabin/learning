namespace csharp.patterns.factories.abstractFactory;

public interface IHotDrinkFactory
{
    IHotDrink Create(int amount);
}