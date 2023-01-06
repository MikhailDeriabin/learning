package algorithm;

public class SelectionSort extends Sort{
    @Override
    public int[] sort(int[] nums){
        int counter = 0;
        for(int i=0; i<nums.length; i++){
            int minElemIndex = i;
            for(int j=i+1; j<nums.length; j++){
                if(nums[minElemIndex] > nums[j]){
                    minElemIndex = j;
                }
                counter++;
            }

            if(minElemIndex != i){
                swap(nums, minElemIndex, i);
            }
        }

        System.out.println("SelectionSort: iteration count is " + counter);
        return nums;
    }
}
