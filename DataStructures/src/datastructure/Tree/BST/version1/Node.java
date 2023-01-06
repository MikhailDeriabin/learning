package datastructure.Tree.BST.version1;

public class Node<T extends Comparable<T>> implements Comparable<Node<T>>{
    private T data;
    private Node<T> leftChild, rightChild;
    private int height;

    public Node(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }

    public Node<T> getLeftChild() {
        return leftChild;
    }
    public void setLeftChild(Node<T> leftChild) {
        this.leftChild = leftChild;
    }

    public Node<T> getRightChild() {
        return rightChild;
    }
    public void setRightChild(Node<T> rightChild) {
        this.rightChild = rightChild;
    }

    public int getHeight() {
        return height;
    }
    public void setHeight(int height) {
        this.height = height;
    }

    @Override
    public int compareTo(Node<T> node){
        return this.getData().compareTo(node.getData());
    }

    @Override
    public String toString(){
        return data.toString();
    }
}
