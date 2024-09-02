namespace csharp.patterns.builder;

//In case u need to specify some order in which creation must be performed

public class MultiStepBuilder
{
    private Implementation implementation;

    /// <summary>
    /// Start the Car creation process
    /// </summary>
    /// <returns></returns>
    public ISpecifyType Start()
    {
        implementation = new();
        return implementation;
    }

    private class Implementation : ISpecifyType, ISpecifyWheelSize, IBuildCar
    {
        private CarType Type;
        private int WheelSize;
    
        public ISpecifyWheelSize SpecifyType(CarType type)
        {
            Type = type;
            return this;
        }

        /// <summary>
        /// This method must be called only ofter type is known, otherwise we can't make validation
        /// </summary>
        /// <param name="size"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public IBuildCar SpecifyWheelSize(int size)
        {
            if(Type == CarType.Sedan && size > 10){
                throw new Exception("Wheel size for Sedan can not be larger than 10");
            }

            if(Type == CarType.Crossover && size < 5){
                throw new Exception("Wheel size for Crossover can not be less than 10");
            }

            WheelSize = size;
            return this;
        }

        public Car Build()
        {
            return new Car(Type, WheelSize);
        }
    }
}

//Each interface has only allowed methods, so we can control the flow of the creation process

public interface ISpecifyType
{
    ISpecifyWheelSize SpecifyType(CarType type);
}

public interface ISpecifyWheelSize
{
    IBuildCar SpecifyWheelSize(int size);
}

public interface IBuildCar
{
    Car Build();
}