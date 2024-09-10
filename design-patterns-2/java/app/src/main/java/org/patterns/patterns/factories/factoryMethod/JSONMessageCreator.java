package org.patterns.patterns.factories.factoryMethod;

import org.patterns.patterns.factories.factoryMethod.message.JSONMessage;
import org.patterns.patterns.factories.factoryMethod.message.Message;

/**
 * Concreate implementation of the base MessageCreator class
 */
public class JSONMessageCreator extends MessageCreator{
    @Override
    protected Message create() {
        return new JSONMessage();
    }
}
