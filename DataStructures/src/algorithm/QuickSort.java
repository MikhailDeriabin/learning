package algorithm;

public class QuickSort extends Sort{

    public long counter = 0;

    public int[] sort(int[] nums){
        sort(nums, 0, nums.length-1);
        System.out.println("QuickSort: iteration count is " + counter);
        return  nums;
    }

    private int[] sort(int[] nums, int minIndex, int maxIndex) {
        if(minIndex < maxIndex) {
            int pivotIndex = partition(nums, minIndex, maxIndex);
            sort(nums, minIndex, pivotIndex-1);
            sort(nums, pivotIndex+1, maxIndex);
        }
        return nums;
    }

    private int partition(int[] nums, int minIndex, int maxIndex){
        int middleItemIndex = (minIndex+maxIndex)/2;

        swap(nums, middleItemIndex, maxIndex);

        int pivotIndex = minIndex;

        for(int i=minIndex; i<maxIndex; i++){
            if(nums[i] < nums[maxIndex]){
                swap(nums, i, pivotIndex);
                pivotIndex++;
            }
            counter++;
        }

        swap(nums, maxIndex, pivotIndex);

        return pivotIndex;
    }
}
