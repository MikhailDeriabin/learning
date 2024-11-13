namespace leetcode.s20;

using Xunit;

public class RunnerTest
{
    private readonly Runner _runner;

    public RunnerTest()
    {
        _runner = new Runner();
    }
    
    [Fact]
    public void Test1()
    {
        string input = "()";
        var expected = true;

        var actual = _runner.IsValid(input);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test2()
    {
        string input = "()[]{}";
        var expected = true;

        var actual = _runner.IsValid(input);

        Assert.Equal(expected, actual);
    }
    
    [Fact]
    public void Test3()
    {
        string input = "(]";
        var expected = false;

        var actual = _runner.IsValid(input);

        Assert.Equal(expected, actual);
    }
    
    [Fact]
    public void Test4()
    {
        string input = "([])";
        var expected = true;

        var actual = _runner.IsValid(input);

        Assert.Equal(expected, actual);
    }
}