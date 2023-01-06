package teht2;

public class Node<T extends Comparable<T>> {
    private T data;
    private Node<T> previousNode;

    public Node(T data){
        this.data = data;
    }

    public T getData() {
        return data;
    }
    public Node<T> getPreviousNode() {
        return previousNode;
    }

    public void setData(T data) {
        this.data = data;
    }
    public void setPreviousNode(Node<T> previousNode) {
        this.previousNode = previousNode;
    }

    @Override
    public String toString(){
        return "" + data;
    }
}
