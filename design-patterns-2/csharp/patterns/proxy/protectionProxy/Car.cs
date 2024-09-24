namespace csharp.patterns.proxy.protectionProxy;

public interface ICar
{
    void Drive();
}

public class Car : ICar
{
    public void Drive()
    {
        Console.WriteLine("Car is being driven");
    }
}

public class Driver
{
    public Driver(int age)
    {
        Age = age;
    }

    public int Age { get; set; }
}

/// <summary>
/// This is a protection proxy and it checks 
/// whenever user has a permission to execute some code or not 
/// </summary>
public class CarProxy : ICar
{
    public CarProxy(Driver driver)
    {
        this.driver = driver;
    }

    private Driver driver;
    private Car car = new Car();
    public void Drive()
    {
        if (driver.Age < 18)
        {
            Console.WriteLine("You are under 18 and can not drive");
            return;
        }

        car.Drive();
    }
}