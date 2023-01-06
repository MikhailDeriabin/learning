package datastructure.Tree.BST.version2;

public interface Tree<T> {
    void insert(T data);
    void remove(T data);
    void traverse();
    Node<T> search(T data);
    Node<T> getMin();
    Node<T> getMax();
}
