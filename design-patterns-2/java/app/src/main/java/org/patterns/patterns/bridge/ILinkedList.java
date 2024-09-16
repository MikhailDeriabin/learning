package org.patterns.patterns.bridge;

/**
 * Interface defining which methods can be used by IFifoCollection.
 * Client code just defines the implementation that need to be used by the IFifoCollection.
 */
public interface ILinkedList<TData> {
    void addFirst(TData item);
    TData removeFirst();
    void addLast(TData item);
    TData removeLast();
}
