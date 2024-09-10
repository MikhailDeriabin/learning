package org.patterns.patterns.factories.abstractFactory.gcp;

import org.patterns.patterns.factories.abstractFactory.Instance;
import org.patterns.patterns.factories.abstractFactory.Instance.Capacity;
import org.patterns.patterns.factories.abstractFactory.ResourceFactory;
import org.patterns.patterns.factories.abstractFactory.Storage;

/**
 * Factory implementation for Google cloud platform resources
 */
public class GoogleResourceFactory implements ResourceFactory {

    @Override
    public Instance createInstance(Capacity capacity) {
        return new GoogleComputeEngineInstance(capacity);
    }

    @Override
    public Storage createStorage(int capacityMB) {
        return new GoogleCloudStorage(capacityMB);
    }
}
