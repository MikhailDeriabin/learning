package org.patterns.patterns.factories.abstractFactory.aws;

import org.patterns.patterns.factories.abstractFactory.Instance;
import org.patterns.patterns.factories.abstractFactory.Instance.Capacity;
import org.patterns.patterns.factories.abstractFactory.ResourceFactory;
import org.patterns.patterns.factories.abstractFactory.Storage;

/**
 * Factory implementation for AWS cloud platform resources
 */
public class AwsResourceFactory implements ResourceFactory {

    @Override
    public Instance createInstance(Capacity capacity) {
        return new Ec2Instance(capacity);
    }

    @Override
    public Storage createStorage(int capacityMB) {
        return new S3Storage(capacityMB);
    }
}
