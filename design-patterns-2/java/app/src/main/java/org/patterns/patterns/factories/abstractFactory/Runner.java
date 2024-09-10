package org.patterns.patterns.factories.abstractFactory;

import org.patterns.patterns.IRunner;
import org.patterns.patterns.factories.abstractFactory.Instance.Capacity;
import org.patterns.patterns.factories.abstractFactory.aws.AwsResourceFactory;
import org.patterns.patterns.factories.abstractFactory.gcp.GoogleResourceFactory;

public class Runner implements IRunner{
    @Override
    public void run(int exampleNum) {
        //Here we can easily switch between implementations for AWS and Google
        //The only line of code that need to be changed is the factory creation

        if(exampleNum == 1){
            useFactory(new AwsResourceFactory());
        }

        if(exampleNum == 2){
            useFactory(new GoogleResourceFactory());
        }
    }

    private void useFactory(ResourceFactory factory) {
        Instance instance = factory.createInstance(Capacity.large);
        Storage storage = factory.createStorage(200);

        instance.start();
        instance.attachStorage(storage);
        instance.stop();
    }
}
