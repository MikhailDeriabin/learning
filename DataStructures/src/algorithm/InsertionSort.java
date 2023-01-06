package algorithm;

public class InsertionSort extends Sort{
    @Override
    public int[] sort(int[] nums) {
        int counter = 0;
        for(int i=1;i<nums.length;i++) {

            int j = i;

            while( j>0 && nums[j-1] > nums[j] ) {
                swap(nums, j, j-1);
                j--;
                counter++;
            }
        }

        System.out.println("InsertionSort: iteration count is " + counter);
        return nums;
    }
}
