package Observer;

import java.util.LinkedList;

//Not canonical implementation
public class NotificationBoard implements Observable{

    private int viewCount;
    private LinkedList<Notification> notifications;

    //Observers
    private LinkedList<Observer> observers;
    private NewNotificationObserver newNotificationObserver;

    public NotificationBoard(){
        viewCount = 0;
        notifications = new LinkedList<>();
        observers = new LinkedList<>();
    }

    public void addNotification(Notification notification){
        notifications.add(notification);
        if(newNotificationObserver != null)
            newNotificationObserver.updated(this);
    }

    public void viewBoard(){
        viewCount++;
        for(Observer observer : observers){
            observer.updated(this);
        }
    }

    public void attachNewNotificationObserver(NewNotificationObserver observer) {
        newNotificationObserver = observer;
    }

    public void detachNewNotificationObserver() {
        newNotificationObserver = null;
    }

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public int getViewCount() {
        return viewCount;
    }
}
