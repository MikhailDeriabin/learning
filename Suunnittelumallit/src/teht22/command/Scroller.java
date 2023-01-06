package teht22.command;

import teht22.View;

public abstract class Scroller {
    protected View view;
    protected double scrollSize;

    public Scroller(View view){
        this.view = view;
        this.scrollSize = 1;
    }
    public Scroller(View view, double scrollSize){
        this.view = view;
        this.scrollSize = scrollSize;
    }
}
