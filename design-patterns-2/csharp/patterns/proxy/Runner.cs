using csharp.patterns.proxy.protectionProxy;

namespace csharp.patterns.proxy;

class Runner : IRunner
{
    public void Run(int exampleNumber)
    {
        if (exampleNumber == 1)
        {
            //Protection proxy, you can not drive if you are under 18 yo
            ICar car = new CarProxy(new Driver(5));
            car.Drive();
        }
    }
}