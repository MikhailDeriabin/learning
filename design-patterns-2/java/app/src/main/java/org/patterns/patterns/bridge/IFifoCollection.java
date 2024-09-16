package org.patterns.patterns.bridge;

/**
 * This is an abstraction which client code is coupled to.
 * It has only methods that client is interested in.
 * All other methods like addFirst() etc. is not important for the client code.
 */
public interface IFifoCollection<TData> {
    void offer(TData item);
    TData poll();
}
