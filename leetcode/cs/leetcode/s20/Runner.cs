namespace leetcode.s20;

using System.Collections.Generic;

public class Runner
{

    public bool IsValid(string s)
    {
        var chars = s.ToCharArray();

        var charsCount = chars.Length;

        if (charsCount == 0 || charsCount % 2 != 0)
            return false;

        var open = new Stack<int>();

        for (var i = 0; i < charsCount; i++)
        {
            var currentChar = chars[i];

            if (currentChar == '(')
                open.Push(')');
            else if (currentChar == '{')
                open.Push('}');
            else if (currentChar == '[')
                open.Push(']');
            else if (open.Count == 0 || open.Pop() != currentChar)
                return false;
        }

        return open.Count == 0;
    }
}