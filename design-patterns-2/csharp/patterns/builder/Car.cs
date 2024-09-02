namespace csharp.patterns.builder;

public enum CarType
{
    Sedan,
    Crossover
}

/// <summary>
/// You must first get the CarType and after that let to choose wheel size
/// (because there are some limitations of wheel size for different car types)
/// </summary>
public class Car
{
    public Car(CarType type, int wheelSize){
        Type = type;
        WheelSize = wheelSize;
    }

    public CarType Type;
    public int WheelSize;

    public override string ToString()
    {
        var typeString = Type == CarType.Sedan ? "Sedan" : "Crossover";
        return $"This is a car of type {typeString} and wheel size {WheelSize}";
    }
}