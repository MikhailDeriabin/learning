package org.patterns.patterns.bridge;

import java.util.LinkedList;

/**
 * Concreate implementation of the logic used by the IFifoCollection.
 * 
 * Ignore that it has same implementation as the ArrayLinkedList, the idea that they should be different.
 */
public class SinglyLinkedList<TData> implements ILinkedList<TData>{

    public SinglyLinkedList() {
        this.list = new LinkedList<TData>();
    }
    private final LinkedList<TData> list;

    @Override
    public void addFirst(TData item) {
        list.addFirst(item);
    }

    @Override
    public TData removeFirst() {
        return list.removeFirst();
    }

    @Override
    public void addLast(TData item) {
        list.addLast(item);
    }

    @Override
    public TData removeLast() {
        return list.removeLast();
    }
}
