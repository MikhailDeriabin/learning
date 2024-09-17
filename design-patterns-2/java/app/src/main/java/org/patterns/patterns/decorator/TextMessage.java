package org.patterns.patterns.decorator;

/**
 * Some basic class for holding and showing messages.
 * It can be extended
 */
public class TextMessage implements IMessage{
    public TextMessage(String content) {
        this.content = content;
    }
    private final String content;

    @Override
    public String getContent() {
        return this.content;
    }
}
