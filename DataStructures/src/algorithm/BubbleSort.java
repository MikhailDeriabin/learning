package algorithm;

public class BubbleSort extends Sort{
    @Override
    public int[] sort(int[] nums){
        int counter = 0;

        for(int i=0; i<nums.length; i++){
            for(int j=0; j<nums.length-1-i; j++){
                if(nums[j] > nums[j+1]){
                    swap(nums, j, j+1);
                }
                counter++;
            }
        }

        System.out.println("BubbleSort: iteration count is " + counter);
        return nums;
    }
}
