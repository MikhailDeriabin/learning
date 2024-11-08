namespace leetcode.s9;

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
        var input = 121;

        var actual = _runner.IsPalindrone(input);

        Assert.True(actual);
    }

    [Fact]
    public void Test2()
    {
        var input = -121;

        var actual = _runner.IsPalindrone(input);

        Assert.False(actual);
    }

    [Fact]
    public void Test3()
    {
        var input = 10;

        var actual = _runner.IsPalindrone(input);

        Assert.False(actual);
    }
}