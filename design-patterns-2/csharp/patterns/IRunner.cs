namespace csharp.patterns;

///<summary>
/// Interface for general classes, which holds some examples for design classes
///</summary>
public interface IRunner {
    /// <summary>
    /// Runs an example use case of a design pattern
    /// </summary>
    /// <param name="exampleNumber">exampleNumber which example to run</param>
    public void Run(int exampleNumber=1);
}