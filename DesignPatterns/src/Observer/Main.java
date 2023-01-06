package Observer;

public class Main {
    public static void main(String[] args) {
        //Generate some random messages
        Notification n1 = new Notification("Hello there!");
        Notification n2 = new Notification("Today is a good day");
        Notification n3 = new Notification("Keys found");
        Notification n4 = new Notification("Just notification");
        Notification n5 = new Notification("Another notification");
        Notification n6 = new Notification("Goodbye");
        Notification n7 = new Notification("Where is everybody?");
        Notification n8 = new Notification("Got a new T-shirt");
        Notification n9 = new Notification("2+2 is 5");
        Notification n10 = new Notification("This is my last notification");

        NotificationBoard notificationBoard = new NotificationBoard();

        //Simulate app working
        notificationBoard.addNotification(n1);
        notificationBoard.addNotification(n2);
        notificationBoard.addNotification(n3);
        notificationBoard.addNotification(n4);
        notificationBoard.addNotification(n5);

        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
        notificationBoard.viewBoard();

        notificationBoard.addNotification(n6);
        notificationBoard.addNotification(n7);
        notificationBoard.addNotification(n8);
        notificationBoard.addNotification(n9);
        notificationBoard.addNotification(n10);

        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
        notificationBoard.viewBoard();
    }
}
