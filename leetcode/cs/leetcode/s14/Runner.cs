namespace leetcode.s14;

using System.Collections.Generic;
using System.Linq;

public class Runner
{
    public string LongestCommonPrefix(string[] strs)
    {
        if(strs.Length == 1)
            return strs[0];
        
        var prefix = "";
        var firstStrChars = strs[0].ToCharArray();
        for (int i = 0; i < firstStrChars.Length; i++)
        {
            var character = firstStrChars[i];
            for (int j = 1; j < strs.Length; j++)
            {
                var str = strs[j];
                if(i >= str.Length || str[i] != character)
                    return prefix;
            }
            prefix += character;
        }
        
        return prefix;
    }
}