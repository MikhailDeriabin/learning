package algorithm;

public class Main {
    public static void main(String[] args) {

        int elemCount = 3000000, minValue = 0, maxValue = 10;

        int[] arrToSort1 = generateRandNumArr(elemCount, minValue, maxValue);
        int[] arrToSort2 = generateRandNumArr(elemCount, minValue, maxValue);
        int[] arrToSort3 = generateRandNumArr(elemCount, minValue, maxValue);
        int[] arrToSort4 = generateRandNumArr(elemCount, minValue, maxValue);
        int[] arrToSort5 = generateRandNumArr(elemCount, minValue, maxValue);
        int[] arrToSort6 = generateRandNumArr(elemCount, minValue, maxValue);
        int[] arrToSort7 = generateRandNumArr(elemCount, minValue, maxValue);

        /*
        BogoSort bogoSort = new BogoSort();
        int[] bongoSorted = bogoSort.sort(arrToSort);
        printArray(bongoSorted);*/

        BubbleSort bubbleSort = new BubbleSort();
        //int[] bubbleSorted = bubbleSort.sort(arrToSort2);
        //printArray(bubbleSorted);

        SelectionSort selectionSort = new SelectionSort();
        //int[] selectionSorted = selectionSort.sort(arrToSort3);
        //printArray(selectionSorted);

        InsertionSort insertionSort = new InsertionSort();
        //int[] insertionSorted = insertionSort.sort(arrToSort4);
        //printArray(insertionSorted);

        ShellSort shellSort = new ShellSort();
        //int[] shellSorted = shellSort.sort(arrToSort5);
        //printArray(shellSorted);

        QuickSort quickSort = new QuickSort();
        int[] quickSorted = quickSort.sort(arrToSort6);
        //printArray(quickSorted);

        MergeSort mergeSort = new MergeSort(arrToSort7);
        int[] mergeSorted = mergeSort.sort();
        //printArray(mergeSorted);
    }

    public static void printArray(int[] arr){
        for(int i=0; i<arr.length; i++){
            if(i % 10 == 0)
                System.out.println();

            System.out.print(arr[i] + " ");
        }
        System.out.println("\n------------------------------------------");
    }

    public static int[] generateRandNumArr(int elemCount, int minValue, int maxValue){
        int[] result = new int[elemCount];
        for(int i=0; i<elemCount; i++){
            result[i] = (int) ( (Math.random()*(maxValue - minValue)) + minValue );
        }

        return result;
    }
}
