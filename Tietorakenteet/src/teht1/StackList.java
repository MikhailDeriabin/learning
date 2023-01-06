package teht1;

public class StackList<T extends Comparable<T>>{
    private Node<T> firstNode;
    private int nodeCount;

    public StackList(){
        this.firstNode = null;
        this.nodeCount = 0;
    }

    public void printAllNodes() {
        Node<T> currentNode = firstNode;

        while(currentNode != null){
            System.out.println(currentNode);
            currentNode = currentNode.getNextNode();
        }
    }

    public int size() {
        return nodeCount;
    }
    public Node<T> pop() {
        if(firstNode == null){
            return null;
        } else{
            Node<T> result = new Node<>(firstNode.getData());
            firstNode = firstNode.getNextNode();
            nodeCount--;
            return result;
        }
    }

    public Node<T> peek() {
        return firstNode;
    }

    public void push(T data) {
        if(firstNode == null){
            firstNode = new Node<>(data);
        } else{
            Node<T> newNode = new Node<>(data);
            newNode.setNextNode(firstNode);
            firstNode = newNode;
        }

        nodeCount++;
    }
}
