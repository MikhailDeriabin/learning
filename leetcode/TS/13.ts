//Convert roman to int

const romanNum :string = 'XIV';

console.log(romanToInt(romanNum));
function romanToInt(numRoman: string) :number{
    const roman :Record<string, number> = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let result :number = 0;

    let previousNum :number = 0;
    let digitCount :number = 0;
    for(let i=0; i<numRoman.length; i++){
        console.log('--------- Start ----------------');
        const currentNum :number = roman[numRoman[i]];
        console.log('currentNum: ', currentNum);
        console.log('previousNum: ', previousNum);
        console.log('digitCount: ', digitCount);

        if(currentNum > previousNum){
            console.log('currentNum > previousNum:');
            result -= previousNum;
            result += currentNum - previousNum;
            previousNum = currentNum;
            console.log('result: ', result);
            console.log('previousNum: ', previousNum);
            digitCount = 1;
            console.log('}');
        } else if(digitCount === 4){
            previousNum = 0;
            digitCount = 0;
            result += currentNum;
        } else{
            previousNum += currentNum;
            digitCount++;
            result += currentNum;
        }

        console.log('end:');
        console.log('result: ', result);
        console.log('}');

        console.log('--------- End ----------------');
    }

    return result;
}