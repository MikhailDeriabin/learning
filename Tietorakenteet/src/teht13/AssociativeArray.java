package teht13;

public interface AssociativeArray<K, V> {
    void add(K key, V value);
    void remove(K key);
    V search(K key);

    int hash(K key);
}
