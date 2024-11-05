namespace leetcode.s1;

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
        var inputArray = new[] { 2, 7, 11, 15 };
        const int inputTarget = 9;
        var expected = new[] { 0, 1 };

        var actual = _runner.TwoSum(inputArray, inputTarget);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test2()
    {
        int[] inputArray = { 3, 2, 4 };
        const int inputTarget = 6;
        int[] expected = { 1, 2 };

        var actual = _runner.TwoSum(inputArray, inputTarget);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test3()
    {
        int[] inputArray = { 3, 3 };
        const int inputTarget = 6;
        int[] expected = { 0, 1 };

        var actual = _runner.TwoSum(inputArray, inputTarget);

        Assert.Equal(expected, actual);
    }
}