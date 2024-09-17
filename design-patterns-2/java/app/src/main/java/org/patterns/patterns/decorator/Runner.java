package org.patterns.patterns.decorator;

import org.patterns.patterns.IRunner;

public class Runner implements IRunner{
    @Override
    public void run(int exampleNum) {
        //Usual string
        IMessage msg = new TextMessage("This is a usual text");
        System.out.println(msg.getContent());

        //String wrapped with <p>-tag
        HtmlEncodedMessage htmlMsg = new HtmlEncodedMessage(msg);
        System.out.println(htmlMsg.getContent());
    }
}
