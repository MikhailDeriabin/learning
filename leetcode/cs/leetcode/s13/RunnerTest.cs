namespace leetcode.s13;

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
        var input = "III";
        var expected = 3;

        var actual = _runner.RomanToInt(input);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test2()
    {
        var input = "LVIII";
        var expected = 58;

        var actual = _runner.RomanToInt(input);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test3()
    {
        var input = "MCMXCIV";
        var expected = 1994;

        var actual = _runner.RomanToInt(input);

        Assert.Equal(expected, actual);
    }
}