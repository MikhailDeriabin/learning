package datastructure.HashTable.chainig;

import datastructure.HashTable.AssociativeArray;

public class HashTableChaining<K, V> implements AssociativeArray<K, V> {
    private int size;
    private int nodeCount;
    private NodeChaining<K, V>[] table;

    private int collisionCount;
    private int resizeCount;

    public HashTableChaining(int size) {
        this.size = size;
        table = new NodeChaining[size];
        nodeCount = 0;
        collisionCount = 0;
        resizeCount = 0;
    }

    @Override
    public void add(K key, V value) {
        if(search(key) == null){
            NodeChaining<K, V> node = new NodeChaining<>(key, value);
            int nodeIndex = hash(node.getKey());
            if(table[nodeIndex] == null){
                table[nodeIndex] = node;
            } else{
                NodeChaining<K, V> nextNode = table[nodeIndex];
                while(nextNode.getNextNode() != null){
                    nextNode = nextNode.getNextNode();
                }

                nextNode.setNextNode(node);
                collisionCount++;
            }
            nodeCount++;
            if(isNeedToResize()){
                resize();
            }
        } else{
            System.out.println("Key " + key +" already exists");
        }
    }

    @Override
    public void remove(K key) {
        int nodeIndex = hash(key);
        if(table[nodeIndex] != null){
            if(table[nodeIndex].getKey().equals(key)){
                table[nodeIndex] = table[nodeIndex].getNextNode();
            } else{
                NodeChaining<K, V> previousNode = table[nodeIndex];
                NodeChaining<K, V> currentNode = previousNode.getNextNode();

                while(currentNode != null){
                    NodeChaining<K, V> nextNode = currentNode.getNextNode();

                    if(currentNode.getKey().equals(key)){
                        previousNode.setNextNode(nextNode);
                        currentNode = null;
                        break;
                    }

                    previousNode = currentNode;
                    currentNode = nextNode;
                }
            }
            nodeCount--;
        }
    }

    @Override
    public V search(K key) {
        V result = null;
        int nodeIndex = hash(key);
        if(nodeIndex >= 0 && table[nodeIndex] != null){
            if(table[nodeIndex].getKey().equals(key)){
                result = table[nodeIndex].getValue();
            } else{
                NodeChaining<K, V> currentNode = table[nodeIndex].getNextNode();

                while(currentNode != null){
                    if(currentNode.getKey().equals(key)){
                        result = currentNode.getValue();
                        break;
                    }
                    currentNode = currentNode.getNextNode();
                }
            }
        }

        return result;
    }

    @Override
    public int hash(K key) {
        if(key.hashCode() % this.size < 0){
            return (key.hashCode() % this.size)*(-1);
        }
        return key.hashCode() % this.size;
    }

    //Full for 75% or more
    private boolean isNeedToResize(){
        return nodeCount >= size*0.75;
    }

    private void resize(){
        size *= 2;
        NodeChaining<K, V>[] newTable = new NodeChaining[size];

        for(int i=0; i<table.length; i++){
            if(table[i] != null){
                int index = hash(table[i].getKey());
                newTable[index] = table[i];
            }
        }

        table = newTable;
        resizeCount++;
    }

    public NodeChaining<K, V>[] getTable() {
        return table;
    }

    public int getCollisionCount() {
        return collisionCount;
    }

    public int getResizeCount() {
        return resizeCount;
    }
}
