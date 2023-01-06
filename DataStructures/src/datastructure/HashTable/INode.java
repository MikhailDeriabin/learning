package datastructure.HashTable;

public interface INode<K,V> {
    K getKey();
    void setKey(K key);
    V getValue();
    void setValue(V value);
}
