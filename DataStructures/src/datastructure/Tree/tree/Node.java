package datastructure.Tree.tree;

import java.util.ArrayList;

public class Node<T> {
    private T data;
    private ArrayList<Node<T>> children;

    public Node(T data) {
        this.data = data;
        children = new ArrayList<>();
    }

    public void addChild(Node<T> node){
        this.children.add(node);
    }

    public String print(int level){
        String result = "\t".repeat(level) + data + "\n";
        for(Node<T> node : this.children){
            result += node.print(level+1);
        }
        return result;
    }

    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }

    public ArrayList<Node<T>> getChildren() {
        return children;
    }
    public void setChildren(ArrayList<Node<T>> children) {
        this.children = children;
    }
}
