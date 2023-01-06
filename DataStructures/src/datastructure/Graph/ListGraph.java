package datastructure.Graph;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ListGraph<N,T> {
    private Map<N, Node<N,T>> nodes;

    public ListGraph() {
        nodes = new HashMap<>();
    }

    public void addNode(Node<N, T> node){
        nodes.put(node.getName(), node);
    }

    public void printNodes(){
        for(Node<N,T> node : nodes.values()){
            ArrayList<Node<N,T>> neighbours = node.getNeighbours();
            System.out.print(node + ": ");
            for(Node<N,T> neighbour : neighbours){
                System.out.print(neighbour + " ");
            }
            System.out.println();
        }

    }

    public Map<N, Node<N,T>> getNodes() {
        return nodes;
    }
}
