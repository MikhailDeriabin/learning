package teht2;

public class Queue<T extends Comparable<T>> {
    private Node<T> firstNode, lastNode;
    private int nodeCount;

    public Queue() {
        this.firstNode = null;
        this.lastNode = null;
        nodeCount = 0;
    }

    public void enqueue(T data){
        Node<T> newNode = new Node<T>(data);

        if(firstNode == null && lastNode == null){
            firstNode = newNode;
            lastNode = firstNode;
        } else{
            firstNode.setPreviousNode(newNode);
            firstNode = newNode;
        }

        nodeCount++;
    }

    public Node<T> dequeue(){
        if(firstNode == null && lastNode == null){
            return null;
        } else{
            Node<T> removedNode = lastNode;
            lastNode = removedNode.getPreviousNode();
            nodeCount--;
            return removedNode;
        }
    }

    public Node<T> peek(){
        return lastNode;
    }

    public void printAllNodes() {
        Node<T> currentNode = lastNode;
        while(currentNode != null){
            System.out.println(currentNode);
            currentNode = currentNode.getPreviousNode();
        }
    }

    public int size(){
        return nodeCount;
    }
}
