namespace leetcode.s21;

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
        ListNode input1 = GenerateListNode([1,2,4]);
        ListNode input2 = GenerateListNode([1,3,4]);
        ListNode expected =  GenerateListNode([1,1,2,3,4,4]);

        var actual = _runner.MergeTwoLists(input1, input2);

        Assert.Equal(expected, actual);
    }

    [Fact]
    public void Test2()
    {
        ListNode input1 = GenerateListNode([]);
        ListNode input2 = GenerateListNode([]);
        ListNode expected =  GenerateListNode([]);

        var actual = _runner.MergeTwoLists(input1, input2);

        Assert.Equal(expected, actual);
    }
    
    [Fact]
    public void Test3()
    {
        ListNode input1 = GenerateListNode([]);
        ListNode input2 = GenerateListNode([0]);
        ListNode expected =  GenerateListNode([0]);

        var actual = _runner.MergeTwoLists(input1, input2);

        Assert.Equal(expected, actual);
    }

    ListNode GenerateListNode(int[] nodes)
    {
        if(nodes.Length == 0)
            return null;
        
        if(nodes.Length == 1)
            return new ListNode(nodes[0]);
        
        var head = new ListNode(nodes[0]);

        var currentPointer = head;
        
        for (var i = 1; i < nodes.Length; i++)
        {
            var node = new ListNode(nodes[i]);
            currentPointer.next = node;
            
            currentPointer = node;
        }
        return head;
    }
}