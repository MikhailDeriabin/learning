package datastructure.Graph;

import datastructure.Lists.List;

import java.util.ArrayList;

public class Node<N, T> {
    private N name;
    private T value;
    private ArrayList<Node<N,T>> neighbours;

    public Node(N name, T value) {
        this.name = name;
        this.value = value;
        neighbours = new ArrayList<>();
    }

    public void addNeighbour(Node<N,T> node){
        neighbours.add(node);
    }

    public void printNeighbours(){
        System.out.print(this + ": ");
        for(Node<N,T> node : neighbours){
            System.out.print(node + " ");
        }
    }

    public N getName() {
        return name;
    }

    public T getValue() {
        return value;
    }
    public void setValue(T value) {
        this.value = value;
    }

    public ArrayList<Node<N,T>> getNeighbours() {
        return neighbours;
    }

    @Override
    public String toString(){
        return name.toString() + ":" + value.toString();
    }
}
