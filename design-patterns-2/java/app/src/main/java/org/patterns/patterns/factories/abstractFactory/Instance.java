package org.patterns.patterns.factories.abstractFactory;

/**
 * Represents an abstract product
 */
public interface Instance {
    enum Capacity{micro, small, large}

    public void start();

    public void attachStorage(Storage storage);

    public void stop();
}
