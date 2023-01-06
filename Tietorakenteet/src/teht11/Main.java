package teht11;

import java.util.Arrays;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random();

        //generate rand num arr
        int elemCount = 999999999, minValue = 0, maxValue = 999999999;
        int[] array = generateRandNumArr(elemCount, minValue, maxValue);

        //sort arr
        QuickSort quickSort = new QuickSort();
        int[] sortedArray = quickSort.sort(array);

        //Create binary search array
        BinarySearchArray arr = new BinarySearchArray(sortedArray);

        System.out.println("\n---------- Search test ----------");

        System.out.println("---------- Random number ----------");
        int indexNumToFind = rand.nextInt(0, elemCount-1);
        int numToFind = sortedArray[indexNumToFind];
        System.out.println("Number to find: " + numToFind + " with index " + indexNumToFind);
        int searchResult = arr.findElemIndex(numToFind);
        System.out.println("Method should return index " + indexNumToFind + ". Returned value " + searchResult);
        arr.printLastSearchIterationCount();

        System.out.println("\n---------- Min number ----------");
        int minNumber = sortedArray[0];
        searchResult = arr.findElemIndex(minNumber);
        System.out.println("Method should return 0 (index of min num in sorted arr). Returned value " + searchResult);
        arr.printLastSearchIterationCount();

        System.out.println("\n---------- Max number ----------");
        int maxNumber = sortedArray[sortedArray.length-1];
        searchResult = arr.findElemIndex(maxNumber);
        System.out.println("Method should return " + (sortedArray.length-1) + " (index of max num in sorted arr). Returned value " + searchResult);
        arr.printLastSearchIterationCount();

        System.out.println("\n---------- Not existing number ----------");
        int notExistingNum = -23;
        searchResult = arr.findElemIndex(notExistingNum);
        System.out.println("Method should return -1 (num does not exist). Returned value " + searchResult);
        arr.printLastSearchIterationCount();

        System.out.println("\n---------- Insertion test ----------");

        System.out.println("---------- Random number ----------");
        int numToInsert = rand.nextInt(0, elemCount-1);
        System.out.println("Number to insert " + numToInsert);
        System.out.println("Before insertion");
        System.out.println(Arrays.toString(arr.getArray()));
        System.out.println("After insertion");
        arr.insert(numToInsert);
        System.out.println(Arrays.toString(arr.getArray()));

        System.out.println("\n---------- Smallest number (should go to the start of the array) ----------");
        numToInsert = arr.getArray()[0]-1;
        System.out.println("Number to insert " + numToInsert);
        System.out.println("Before insertion");
        System.out.println(Arrays.toString(arr.getArray()));
        System.out.println("After insertion");
        arr.insert(numToInsert);
        System.out.println(Arrays.toString(arr.getArray()));

        System.out.println("\n---------- Biggest number (should go to the end of the array) ----------");
        numToInsert = arr.getArray()[arr.getArray().length-1]+1;
        System.out.println("Number to insert " + numToInsert);
        System.out.println("Before insertion");
        System.out.println(Arrays.toString(arr.getArray()));
        System.out.println("After insertion");
        arr.insert(numToInsert);
        System.out.println(Arrays.toString(arr.getArray()));
    }

    public static int[] generateRandNumArr(int elemCount, int minValue, int maxValue){
        Random rand = new Random();
        int[] result = new int[elemCount];
        for(int i=0; i<elemCount; i++){
            result[i] = rand.nextInt(minValue, maxValue+1);
        }

        return result;
    }
}
