package org.patterns.patterns.factories.abstractFactory;

import org.patterns.patterns.factories.abstractFactory.Instance.Capacity;

/**
 * Abstract factory with methods defined for each object type.
 * 
 * It has a set of methods for creating different objects.
 */
public interface ResourceFactory {
    public Instance createInstance(Capacity capacity);

    public Storage createStorage(int capacityMB);
}
