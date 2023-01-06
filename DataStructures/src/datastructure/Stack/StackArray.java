package datastructure.Stack;

public class StackArray<T>{
    private T[] nodes;
    private int nodeCount;

    public StackArray() {
        this.nodes = (T[]) new Object[1];
    }

    public void printAllNodes(){
        for(T node : nodes){
            System.out.println(node);
        }
    }

    public int size(){
        return nodeCount;
    }

    public T pop() {
        if(nodes == null || nodes.length <= 0)
            return null;
        else{
            T[] oldNodes = nodes;

            nodeCount--;
            nodes = (T[]) new Object[nodeCount];

            for(int i=0; i<nodes.length; i++){
                nodes[i] = oldNodes[i];
            }

            return oldNodes[oldNodes.length-1];
        }

    }

    public T peek() {
        if(nodes == null || nodes.length <= 0)
            return null;
        else
            return nodes[nodes.length-1];
    }

    public void push(T data) {
        T[] oldNodes = nodes;

        nodeCount++;
        nodes = (T[]) new Object[nodeCount];

        for(int i=0; i<oldNodes.length; i++){
            nodes[i] = oldNodes[i];
        }
        nodes[nodes.length-1] = data;
    }
}
