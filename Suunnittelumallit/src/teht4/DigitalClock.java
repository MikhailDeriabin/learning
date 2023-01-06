package teht4;

import java.util.Observable;
import java.util.Observer;

public class DigitalClock implements Observer {
    private ClockTimer timer;

    public DigitalClock(ClockTimer ct){
        timer = ct;
        timer.addObserver(this);
    }

    @Override
    public void update(Observable o, Object arg) {
        if (o == timer){
            draw();
        }
    }

    private void draw(){
        int hour = timer.getHour();
        int minute = timer.getMinute();
        int second = timer.getSecond();
        System.out.println(hour + ":" + minute + ":" + second);
    }
}
