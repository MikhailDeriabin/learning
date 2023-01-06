package datastructure.HashTable.chainig;

import datastructure.HashTable.INode;

public class NodeChaining<K, V> implements INode<K, V> {
    private K key;
    private V value;
    private NodeChaining<K, V> nextNode;

    public NodeChaining(K key, V value) {
        this.key = key;
        this.value = value;
        nextNode= null;
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

    public NodeChaining<K, V> getNextNode() {
        return nextNode;
    }
    public void setNextNode(NodeChaining<K, V> nextNode) {
        this.nextNode = nextNode;
    }

    @Override
    public String toString(){
        return key.toString() + ": " + value.toString();
    }
}
