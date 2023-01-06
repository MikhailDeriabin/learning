package algorithm;

public class MergeSort{
    int[] nums;
    int[] tempNums;
    long counter = 0;

    public MergeSort(int[] nums){
        this.nums = nums;
        this.tempNums = new int[nums.length];
    }

    public int[] sort() {
        mergeSort(0, nums.length-1);
        System.out.println("MergeSort: iteration count is " + counter);
        return nums;
    }

    private void mergeSort(int minIndex, int maxIndex){
        if(minIndex < maxIndex){
            int middleIndex = (minIndex + maxIndex)/2;

            mergeSort(minIndex, middleIndex);
            mergeSort(middleIndex+1, maxIndex);

            merge(minIndex, middleIndex, maxIndex);
        }
    }

    private void merge(int minIndex, int middleIndex, int maxIndex) {
        for(int i=minIndex; i<=maxIndex; i++){
            tempNums[i] = nums[i];
        }

        int leftArrayIndex = minIndex;
        int rightArrayIndex = middleIndex + 1;
        int i = minIndex;

        while(leftArrayIndex <= middleIndex && rightArrayIndex <= maxIndex){
            if(tempNums[leftArrayIndex] < tempNums[rightArrayIndex]){
                nums[i] = tempNums[leftArrayIndex];
                leftArrayIndex++;
            } else{
                nums[i] = tempNums[rightArrayIndex];
                rightArrayIndex++;
            }

            i++;

            counter++;
        }

        while(leftArrayIndex <= middleIndex){
            nums[i] = tempNums[leftArrayIndex];
            leftArrayIndex++;
            i++;
            counter++;
        }

        while(rightArrayIndex <= maxIndex){
            nums[i] = tempNums[rightArrayIndex];
            rightArrayIndex++;
            i++;
            counter++;
        }

    }
}
