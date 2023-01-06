package teht11;

public abstract class Sort {

    public abstract int[] sort(int[] nums);

    protected int[] swap(int[] nums, int firstIndex, int secondIndex){
        int temp = nums[firstIndex];
        nums[firstIndex] = nums[secondIndex];
        nums[secondIndex] = temp;

        return nums;
    }
}
