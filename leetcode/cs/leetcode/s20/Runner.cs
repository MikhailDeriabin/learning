namespace leetcode.s20;

using System;
using System.Collections.Generic;
using System.Linq;

public class Runner
{
    Dictionary<char, string> _openBrackets = new()
    {
        { '(', "0" },
        { '[', "1" },
        { '{', "2" }
    };

    Dictionary<char, string> _closedBrackets = new()
    {
        { ')', "0" },
        { ']', "1" },
        { '}', "2" }
    };

    public bool IsValid(string s)
    {
        var chars = s.ToCharArray();

        var charsCount = chars.Length;

        if (charsCount == 0 || charsCount % 2 != 0)
            return false;

        var foundOpenBrackets = "";
        var foundClosedBrackets = "";

        for (var i = 0; i < charsCount; i++)
        {
            var currentChar = chars[i];
            
            if(isOpenBracket(currentChar))
                foundOpenBrackets += _openBrackets[currentChar];
            
            if(isClosedBracket(currentChar))
                foundClosedBrackets += _closedBrackets[currentChar];
        }
        
        return foundOpenBrackets == foundClosedBrackets;
    }

    private bool isOpenBracket(char character)
    {
        return character == '(' || character == '[' || character == '{';
    }
    
    private bool isClosedBracket(char character)
    {
        return character == ')' || character == ']' || character == '}';
    }
}