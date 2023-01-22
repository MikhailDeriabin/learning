/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const nums :number[] = [3,2,2,3];
const nums1 :number[] = [3,2,3];
const nums2 :number[] = [3,2,4];

const result :number[] = twoSum(nums, 6);
console.log(result);
function twoSum(nums: number[], target: number) :number[]{
    const result :number[] = [];

    if(nums.length == 2)
        return [0, 1];

    const numsLength :number = nums.length;
    const numsMiddle :number = Math.ceil(numsLength/2);

    for(let i=0; i<=numsMiddle; i++){
        const startElem :number = nums[i];
        const searchNumStart :number = target - startElem;

        const endElem :number = nums[numsLength-i-1];
        const searchNumEnd :number = target - endElem;

        if(endElem === searchNumStart)
            return [i, numsLength-i-1];

        for(let j=i+1; j<=numsMiddle; j++){
            const currentStartNum :number = nums[j];
            const currentEndNum :number = nums[numsLength-j-1];

            console.log('currentStartNum: ', currentStartNum);
            console.log('currentEndNum: ', currentEndNum);

            if(currentStartNum === searchNumStart)
                return [i, j];

            if(currentEndNum === searchNumEnd)
                return [numsLength-j-1, numsLength-i-1];
        }
    }

    return result;
}