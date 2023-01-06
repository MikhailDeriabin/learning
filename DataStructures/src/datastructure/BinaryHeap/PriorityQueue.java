package datastructure.BinaryHeap;

public interface PriorityQueue {
    void insert(int node);
    int peek();

    int poll();

    boolean isEmpty();
}
