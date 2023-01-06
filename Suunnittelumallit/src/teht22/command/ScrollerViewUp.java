package teht22.command;

import teht22.View;

public class ScrollerViewUp extends Scroller implements UIEventHandler {
    public ScrollerViewUp(View view){
        super(view);
    }
    public ScrollerViewUp(View view, double scrollSize){
        super(view, scrollSize);
    }

    @Override
    public void handle() {
        double currentPositionInDocument = view.getPositionInView();
        double newPositionInDocument = currentPositionInDocument - scrollSize;
        if(newPositionInDocument < 0){
            newPositionInDocument = 0;
        }

        view.setPositionInView(newPositionInDocument);
    }
}
