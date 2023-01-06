package teht12;

public class Main {
    public static void main(String[] args) {
        int elemCount = 50, minValue = 1, maxValue = 100;

        MinBinaryHeapArray heap2 = generateRandNumMinHeap(elemCount, minValue, maxValue);
        int[] unsortedHeap2 = heap2.getNodes();
        System.out.println("-------------- After insertion 50 random elements --------------");
        printArray(unsortedHeap2);
        int[] sortedHeap2 = heap2.sort();
        System.out.println("-------------- After heap sorting --------------");
        printArray(sortedHeap2);


        MinBinaryHeapArray heap3 = new MinBinaryHeapArray(5);

        heap3.insert(56);
        heap3.insert(23);
        heap3.insert(34);
        heap3.insert(10);
        heap3.insert(1);
        int[] unsortedHeap3 = heap3.getNodes();
        System.out.println("-------------- Heap after insertion 56, 23, 34, 10, 1 --------------");
        printArray(unsortedHeap3);

        System.out.println("Remove 2 min elements: ");
        System.out.println(heap3.poll());
        System.out.println(heap3.poll());
        unsortedHeap3 = heap3.getNodes();
        System.out.println("-------------- Heap after removing 2 min elements --------------");
        printArray(unsortedHeap3);
    }

    public static MinBinaryHeapArray generateRandNumMinHeap(int elemCount, int minValue, int maxValue){
        MinBinaryHeapArray heap = new MinBinaryHeapArray(elemCount);

        for(int i=0; i<elemCount; i++){
            heap.insert((int) ( (Math.random()*(maxValue - minValue)) + minValue ));
        }

        return heap;
    }

    public static void printArray(int[] arr){
        for(int i=0; i<arr.length; i++){
            if(i % 10 == 0)
                System.out.println();

            System.out.print(arr[i] + " ");
        }
        System.out.println("\n------------------------------------------\n");
    }
}
