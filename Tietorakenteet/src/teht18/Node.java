package teht18;

public class Node<T> {
    private T data;
    private Node<T> leftChild, rightChild, parent;
    private int height, depth;

    public Node(T data, Node<T> parent) {
        this.data = data;
        this.parent = parent;

        if(parent != null)
            this.depth = parent.getDepth() + 1;
        else
            this.depth = 0;
        this.height = 0;
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

    public Node<T> getParent() {
        return parent;
    }
    public void setParent(Node<T> parent) {
        this.parent = parent;
    }

    public void updateHeight(){
        int maxHeight = 0;
        if(leftChild != null && rightChild != null){
            maxHeight = Math.max(leftChild.getHeight(), rightChild.getHeight());
        } else if(leftChild != null && rightChild == null){
            maxHeight = leftChild.getHeight();
        } else if(leftChild == null && rightChild != null){
            maxHeight = rightChild.getHeight();
        }
        height = maxHeight + 1;

        if(parent != null){
            parent.updateHeight();
        }
    }
    public void decreaseHeight(){
        height--;
    }
    public int getHeight() {
        return height;
    }

    public int getDepth() {
        return depth;
    }
    public void setDepth(int depth) {
        this.depth = depth;
    }

    @Override
    public String toString(){
        return data.toString();
    }
}
