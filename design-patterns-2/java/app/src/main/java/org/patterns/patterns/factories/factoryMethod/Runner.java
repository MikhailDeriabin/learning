package org.patterns.patterns.factories.factoryMethod;

import org.patterns.patterns.IRunner;
import org.patterns.patterns.factories.factoryMethod.message.Message;

public class Runner implements IRunner{
    @Override
    public void run(int exampleNum) {
        printMessage(new JSONMessageCreator());

        printMessage(new TextMessageCreator());
    }

    public void printMessage(MessageCreator creator) {
        Message message = creator.getMessage();

        System.out.println("Message: " + message.getContent() + "\n-------");
    }
}
