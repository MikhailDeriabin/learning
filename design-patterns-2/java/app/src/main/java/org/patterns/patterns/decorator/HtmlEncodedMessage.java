package org.patterns.patterns.decorator;

/**
 * Decorator for IMessage objects, which wraps the message into <p> tag 
 */
public class HtmlEncodedMessage implements IMessage{
    public HtmlEncodedMessage(IMessage message) {
        this.message = message;
    }
    private final IMessage message;

    @Override
    public String getContent(){
        return "<p>" + message.getContent() + "</p>";
    }
}
