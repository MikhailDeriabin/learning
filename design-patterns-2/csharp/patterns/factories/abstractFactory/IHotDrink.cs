namespace csharp.patterns.factories.abstractFactory;

/// <summary>
/// An interface of abstract product we want to create.
/// Notice that the abstract factory does not have to create families of objects.
/// the abstract factory is about creating abstract objects one or more
/// </summary>
public interface IHotDrink
{
    void Consume();
}