using System.Text;

namespace csharp.patterns.builder;

class Runner : IRunner
{
    public void Run(int exampleNumber)
    {
        if(exampleNumber == 1){
            var txt = StringBuilderExample("Hello, World!");
            Console.WriteLine(txt);
        }

        if(exampleNumber == 2){
            var builder = new HTMLTagBuilder();
            builder
                .AddChild("p", "Some content")
                .AddChild("span", "Another content");
                
            Console.WriteLine(builder);
        }

        if(exampleNumber == 3){
            var builder = new MultiStepBuilder();
            var car1 = builder.Start().SpecifyType(CarType.Crossover).SpecifyWheelSize(20).Build();
            var car2 = builder.Start().SpecifyType(CarType.Sedan).SpecifyWheelSize(4).Build();
            Console.WriteLine("car1 " + car1);
            Console.WriteLine("car2 " + car2);
        }
        
    }

    /// <summary>
    /// Example of C# built-in builder
    /// </summary>
    /// <param name="content">content to display in p tag</param>
    private string StringBuilderExample(string content){
        var builder = new StringBuilder();
        builder.Append("<p>");
        builder.Append(content);
        builder.Append("</p>");

        return builder.ToString();
    }
}