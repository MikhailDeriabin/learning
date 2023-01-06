package datastructure.HashTable.linearProbing;

import datastructure.HashTable.AssociativeArray;

public class HashTableLinear<K, V> implements AssociativeArray<K, V> {
    private int size;
    private int nodeCount;
    private NodeLinear<K, V>[] table;

    private int collisionCount;
    private int resizeCount;

    public HashTableLinear(int size) {
        this.size = size;
        table = new NodeLinear[size];
        nodeCount = 0;
        collisionCount = 0;
        resizeCount = 0;
    }

    @Override
    public void add(K key, V value) {
        if(search(key) == null){
            NodeLinear<K, V> node = new NodeLinear<>(key, value);
            int nodeIndex = hash(node.getKey());
            if(table[nodeIndex] == null){
                table[nodeIndex] = node;
            } else{
                nodeIndex++;
                while(table[nodeIndex] != null){
                    nodeIndex++;
                }

                table[nodeIndex] = node;
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
            if (!table[nodeIndex].getKey().equals(key)) {
                nodeIndex++;

                while (!table[nodeIndex].getKey().equals(key)) {
                    nodeIndex++;
                }
            }
            table[nodeIndex] = null;
            nodeCount--;
        }
    }

    @Override
    public V search(K key) {
        V result = null;
        int nodeIndex = hash(key);
        if(nodeIndex >= 0 && table[nodeIndex] != null){
            if (!table[nodeIndex].getKey().equals(key)) {
                nodeIndex++;
                while (!table[nodeIndex].getKey().equals(key)) {
                    nodeIndex++;
                }
            }
            result = table[nodeIndex].getValue();
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
        NodeLinear<K, V>[] newTable = new NodeLinear[size];

        for(int i=0; i<table.length; i++){
            if(table[i] != null){
                int index = hash(table[i].getKey());
                newTable[index] = table[i];
            }
        }

        table = newTable;
        resizeCount++;
    }

    public NodeLinear<K, V>[] getTable() {
        return table;
    }

    public int getCollisionCount() {
        return collisionCount;
    }

    public int getResizeCount() {
        return resizeCount;
    }
}
