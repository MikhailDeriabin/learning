namespace leetcode.s14;

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
        string[] input = ["flower","flow","flight"];
        var expected = "fl";

        var actual = _runner.LongestCommonPrefix(input);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test2()
    {
        string[] input = ["dog","racecar","car"];
        var expected = "";

        var actual = _runner.LongestCommonPrefix(input);

        Assert.Equal(expected, actual);
    }
}