package datastructure.Stack;

public interface Stack<T extends Comparable<T>> {
    Node<T> pop();
    Node<T> peek();
    void push(T data);
}
