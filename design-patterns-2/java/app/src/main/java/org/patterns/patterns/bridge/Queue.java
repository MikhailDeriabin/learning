package org.patterns.patterns.bridge;

/**
 * A concreate implementation that is used by client code.
 * Notice that the client should inject the required ILinkedList class and so basically defines what implemetation to use
 */
public class Queue<TData> implements IFifoCollection<TData>{

    public Queue(ILinkedList<TData> implementator) {
        this.implementator = implementator;
    }
    private final ILinkedList<TData> implementator;

    @Override
    public void offer(TData item) {
        implementator.addFirst(item);
    }

    @Override
    public TData poll() {
        return implementator.removeLast();
    }
}
