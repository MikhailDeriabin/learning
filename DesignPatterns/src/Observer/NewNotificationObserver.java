package Observer;

public class NewNotificationObserver implements Observer{

    public NewNotificationObserver(NotificationBoard observable){
        observable.attachNewNotificationObserver(this);
    }

    @Override
    public void updated(Observable observable) {
        System.out.println("New message has been added");
    }
}
