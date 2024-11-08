namespace leetcode.s13;

using System.Collections.Generic;
using System.Linq;

public class Runner
{
    private Dictionary<char, int> _romanNumbers = new()
    {
        { 'I', 1 },
        { 'V', 5 },
        { 'X', 10 },
        { 'L', 50 },
        { 'C', 100 },
        { 'D', 500 },
        { 'M', 1000 }
    };

    public int RomanToInt(string romanNumber)
    {
        if (!IsRomanNumber(romanNumber))
        {
            return 0;
        }

        var result = 0;
        
        var letters = romanNumber.ToCharArray();
        var length = letters.Length;

        for(var i = 0; i < length; i++)
        {
            if (i + 1 >= length)
            {
                result += _romanNumbers[letters[i]];
                break;
            }
                
            var current = _romanNumbers[letters[i]];
            var next = _romanNumbers[letters[i+1]];

            if (current < next)
            {
                result += next - current;
                i++;
                continue;
            }
            
            result += current;
        }
        
        return result;
    }

    private bool IsRomanNumber(string romanNumber)
    {
        foreach (var letter in romanNumber)
        {
            if (!IsRomanLetter(letter))
                return false;
        }
        return true;
    }

    private bool IsRomanLetter(char letter)
    {
        var allowedLetters = new List<char>{'I', 'V', 'X', 'L', 'C', 'D', 'M'};
        
        return allowedLetters.Contains(letter);
    }
}