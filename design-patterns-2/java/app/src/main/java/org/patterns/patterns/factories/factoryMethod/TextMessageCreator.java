package org.patterns.patterns.factories.factoryMethod;

import org.patterns.patterns.factories.factoryMethod.message.Message;
import org.patterns.patterns.factories.factoryMethod.message.TextMessage;

/**
 * Concreate implementation of the base MessageCreator class
 */
public class TextMessageCreator extends MessageCreator{
    @Override
    protected Message create() {
        return new TextMessage();
    }
}
