package algorithm;

//non-efficient for classical computers, but extremely efficient for quantum computers
public class BogoSort extends Sort{
    @Override
    public int[] sort(int[] nums){
        int counter = 0;
        boolean isSorted = isSorted(nums);
        while(!isSorted){
            nums = shuffle(nums);
            counter++;
            isSorted = isSorted(nums);
        }

        System.out.println("BongoSort: iteration count is " + counter);

        return nums;
    }

    private boolean isSorted(int[] nums) {
        for(int i=0; i<nums.length-1; i++){
            if(nums[i] > nums[i+1])
                return false;
        }

        return true;
    }

    private int[] shuffle(int[] nums){
        for(int i=nums.length-1; i>=0; i--){
            int j = (int) (Math.random()*i);
            nums = swap(nums, i, j);
        }

        return nums;
    }
}
