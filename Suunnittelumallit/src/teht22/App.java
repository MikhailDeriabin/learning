package teht22;

import teht22.command.ScrollerViewDown;
import teht22.command.ScrollerViewUp;
import teht22.command.UIEventHandler;

public class App {
    public static void main(String[] args) {
        View mainView = new View();
        UIEventHandler scrollUpEventHandler = new ScrollerViewUp(mainView, 10);
        UIEventHandler scrollDownEventHandler = new ScrollerViewDown(mainView, 10);

        Button btnUp = new Button(scrollUpEventHandler);
        Button btnDown = new Button(scrollDownEventHandler);

        System.out.println("View in the start");
        System.out.println("Current view position " + mainView.getPositionInView());

        btnDown.click();
        btnDown.click();
        System.out.println("\nView after scroll down btn was clicked 2 times");
        System.out.println("Current view position " + mainView.getPositionInView());

        btnUp.click();
        System.out.println("\nView after scroll up btn was clicked 1 time");
        System.out.println("Current view position " + mainView.getPositionInView());
    }
}
