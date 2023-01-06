package datastructure.BinaryHeap;

public class MinBinaryHeapArray implements PriorityQueue {
    private int nextElemIndex;
    private final int maxLength;

    private final int[] nodes;

    public MinBinaryHeapArray(int maxLength) {
        this.nextElemIndex = 0;
        this.maxLength = maxLength;

        nodes = new int[maxLength];
    }

    @Override
    public void insert(int node){
        if(!isFull()){
            nodes[nextElemIndex] = node;
            reorderUp(nextElemIndex);
            nextElemIndex++;
        } else{
            System.out.println("Heap is full");
        }
    }

    @Override
    public int peek() {
        return nodes[0];
    }

    @Override
    public int poll() {
        int result = peek();

        swap(0, nextElemIndex-1);
        nodes[nextElemIndex-1] = 0;
        nextElemIndex--;

        reorderDown(0);

        return result;
    }

    @Override
    public boolean isEmpty(){
        return nextElemIndex <= 0;
    }

    //heap sort
    public int[] sort(){
        int size = nextElemIndex;
        int[] result = new int[size];
        for(int i=0; i<size; i++){
            result[i] = poll();
        }

        return result;
    }

    public int[] getNodes() {
        return nodes;
    }

    private void reorderUp(int childNodeIndex) {
        int parentNodeIndex = (childNodeIndex-1) / 2;
        if(childNodeIndex > 0 && nodes[childNodeIndex] < nodes[parentNodeIndex]){
            swap(childNodeIndex, parentNodeIndex);
            reorderUp(parentNodeIndex);
        }
    }
    private void reorderDown(int parentNodeIndex) {
        int leftChildIndex = 2*parentNodeIndex + 1;
        int rightChildIndex = 2*parentNodeIndex + 2;

        int minNodeIndex = parentNodeIndex;

        if(leftChildIndex < nextElemIndex && nodes[parentNodeIndex] > nodes[leftChildIndex]){
            minNodeIndex = leftChildIndex;
        }
        if(rightChildIndex < nextElemIndex && nodes[minNodeIndex] > nodes[rightChildIndex]){
            minNodeIndex = rightChildIndex;
        }

        if(minNodeIndex != parentNodeIndex){
            swap(parentNodeIndex, minNodeIndex);
            reorderDown(minNodeIndex);
        }
    }

    private void swap(int index1, int index2) {
        int temp = nodes[index1];
        nodes[index1] = nodes[index2];
        nodes[index2] = temp;
    }

    private boolean isFull(){
        return nextElemIndex >= maxLength;
    }
}
