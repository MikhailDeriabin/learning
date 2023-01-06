package algorithm;

public class ShellSort extends Sort{
    @Override
    public int[] sort(int[] nums) {
        int counter = 0;
        for(int gap=nums.length/2; gap>0; gap/=2){
            for(int i=gap;i<nums.length;i++) {

                int j = i;

                while( j>=gap && nums[j-gap] > nums[j] ) {
                    swap(nums, j, j-gap);
                    j -= gap;
                    counter++;
                }
            }
        }

        System.out.println("ShellSort: iteration count is " + counter);
        return nums;
    }
}
