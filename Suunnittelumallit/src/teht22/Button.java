package teht22;

import teht22.command.UIEventHandler;

public class Button {
    private final UIEventHandler handler;

    public Button(UIEventHandler handler) {
        this.handler = handler;
    }

    public void click(){
        handler.handle();
    }
}
