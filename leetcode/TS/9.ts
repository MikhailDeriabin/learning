// Given an integer x, return true if x is a palindrome, and false otherwise.

const num :number = 1221;

console.log(isPalindrome(num));
function isPalindrome(num :number) :boolean {
    if(num < 0)
        return false;

    const numStr :string = `${num}`;
    let numStrLength :number = numStr.length;

    if(numStrLength === 1)
        return true;

    let numStrHalf :number = numStrLength/2;
    let j :number = numStrLength-1;

    for(let i=0; i<numStrHalf; i++, j--){
        if(numStr[i] !== numStr[j])
            return false;
    }

    return true;
}