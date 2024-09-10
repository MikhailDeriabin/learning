package org.patterns.patterns.factories.factoryMethod;

import org.patterns.patterns.factories.factoryMethod.message.Message;

/**
 * This is an abstruct class for creating Message classes.
 * 
 * It will be overridden by concrete creators
 */
public abstract class MessageCreator {
    public Message getMessage() {
        Message message = create();

        //Here some default and common operations for message can be done
        message.addDefaultHeaders();
        message.encrypt();

        return message;
    }

    protected abstract Message create();
}
