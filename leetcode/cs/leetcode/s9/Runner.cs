namespace leetcode.s9;

using System;

public class Runner
{
    public bool IsPalindrone(int x)
    {
        if(x < 0)
            return false;
        
        var strX = x.ToString();

        return strX == Reverse(strX);
    }
    
    private string Reverse( string s )
    {
        char[] charArray = s.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
}