package datastructure.Tree.binary.linkedlist;

public class Node<T>{
    private T data;

    private Node<T> leftChild;
    private Node<T> rightChild;

    private int height;
    public Node(T data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }

    public T getData() {
        return data;
    }
    public Node<T> getLeftChild() {
        return leftChild;
    }
    public Node<T> getRightChild() {
        return rightChild;
    }
    public int getHeight() {
        return height;
    }

    public void setData(T data) {
        this.data = data;
    }
    public void setLeftChild(Node<T> leftChild) {
        this.leftChild = leftChild;
    }
    public void setRightChild(Node<T> rightChild) {
        this.rightChild = rightChild;
    }
    public void setHeight(int height) {
        this.height = height;
    }

    @Override
    public String toString(){
        return data.toString();
    }
}
