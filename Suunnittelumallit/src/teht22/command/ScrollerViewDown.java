package teht22.command;

import teht22.View;

public class ScrollerViewDown extends Scroller implements UIEventHandler {
    public ScrollerViewDown(View view){
        super(view);
    }
    public ScrollerViewDown(View view, double scrollSize){
        super(view, scrollSize);
    }

    @Override
    public void handle() {
        double currentPositionInDocument = view.getPositionInView();
        double newPositionInDocument = currentPositionInDocument + scrollSize;

        view.setPositionInView(newPositionInDocument);
    }
}
