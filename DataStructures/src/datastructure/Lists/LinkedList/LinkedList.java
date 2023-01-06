package datastructure.Lists.LinkedList;

import datastructure.Lists.List;

public class LinkedList<T extends Comparable<T>> implements List<T> {
    private Node<T> firstNode;
    private int nodeCount;

    public LinkedList(){
        this.firstNode = null;
        nodeCount = 0;
    }

    public Node<T> getFirstNode(){
        return firstNode;
    }

    @Override
    public void add(T data) {
        if(firstNode == null){
            firstNode = new Node<>(data);
        } else{
            Node<T> newNode = new Node<>(data);
            newNode.setNextNode(firstNode);
            firstNode = newNode;
        }

        nodeCount++;
    }

    @Override
    public void remove(T data) {
        if(firstNode != null){
            if(firstNode.getData().compareTo(data) == 0){
                firstNode = firstNode.getNextNode();
            } else{
                Node<T> previousNode = firstNode;
                Node<T> currentNode = firstNode.getNextNode();

                while(currentNode != null){
                    if(currentNode.getData().compareTo(data) == 0){
                        previousNode.setNextNode(currentNode.getNextNode());
                        nodeCount--;
                        break;
                    } else{
                        previousNode = currentNode;
                        currentNode = currentNode.getNextNode();
                    }
                }
            }
        }
    }

    @Override
    public void printAllNodes() {
        Node<T> currentNode = firstNode;

        while(currentNode != null){
            System.out.println(currentNode);
            currentNode = currentNode.getNextNode();
        }
    }

    @Override
    public int size() {
        return nodeCount;
    }

    public void removeFirst(T data) {
        firstNode = firstNode.getNextNode();
        nodeCount--;
    }
}
