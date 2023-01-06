package datastructure.HashTable.linearProbing;

import datastructure.HashTable.INode;

public class NodeLinear<K, V> implements INode<K, V> {
    private K key;
    private V value;

    public NodeLinear(K key, V value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public K getKey() {
        return key;
    }
    @Override
    public void setKey(K key) {
        this.key = key;
    }

    @Override
    public V getValue() {
        return value;
    }
    @Override
    public void setValue(V value) {
        this.value = value;
    }

    @Override
    public String toString(){
        return key.toString() + ": " + value.toString();
    }
}
