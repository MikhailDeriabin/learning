package Observer;

public class ViewCountObserver implements Observer{

    public ViewCountObserver(Observable observable){
        observable.attach(this);
    }

    @Override
    public void updated(Observable observable) {
        int viewCount = observable.getViewCount();
        if(viewCount >= 10){
            System.out.println("Congratulations! Your board is super popular");
        } else if(viewCount >= 5){
            System.out.println("Your board is getting noticed!");
        }
    }
}
