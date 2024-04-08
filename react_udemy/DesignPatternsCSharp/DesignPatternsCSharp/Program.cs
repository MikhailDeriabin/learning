using DesignPatternsCSharp;
using DesignPatternsCSharp.SOLID;

var examplesToRun = new List<IExample>
{
    new SingleResponsibility()
};

examplesToRun.ForEach(example => example.Demo());
