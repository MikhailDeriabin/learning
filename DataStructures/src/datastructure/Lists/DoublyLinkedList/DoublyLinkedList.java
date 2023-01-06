package datastructure.Lists.DoublyLinkedList;

import datastructure.Lists.List;

public class DoublyLinkedList<T extends Comparable<T>> implements List<T> {
    private Node<T> firstNode, lastNode;
    private int nodeCount;

    public DoublyLinkedList() {
        this.firstNode = null;
        this.lastNode = null;
        nodeCount = 0;
    }

    public Node<T> getFirstNode(){
        return firstNode;
    }

    public Node<T> getLastNode(){
        return lastNode;
    }

    @Override
    public void add(T data) {
        if(firstNode == null && lastNode == null){
            lastNode = new Node<T>(data);
            firstNode = lastNode;
        } else{
            Node<T> newNode = new Node<T>(data);

            newNode.setPreviousNode(lastNode);
            lastNode.setNextNode(newNode);

            lastNode = newNode;
        }

        nodeCount++;
    }

    @Override
    public void remove(T data) {
        if(firstNode != null && lastNode != null){

            Node<T> currentNode = lastNode;
            Node<T> previousNode = currentNode.getPreviousNode();
            Node<T> nextNode = currentNode.getNextNode();

            while(currentNode != null){
                if(currentNode.getData().compareTo(data) == 0){
                    if(nextNode != null){
                        nextNode.setPreviousNode(currentNode.getPreviousNode());
                    } else{
                        lastNode = previousNode;
                    }

                    if(previousNode != null){
                        previousNode.setNextNode(currentNode.getNextNode());
                    } else{
                        firstNode = nextNode;
                    }

                    nodeCount--;

                    break;
                }

                currentNode = previousNode;
                if(currentNode != null){
                    previousNode = currentNode.getPreviousNode();
                    nextNode = currentNode.getNextNode();
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
}
