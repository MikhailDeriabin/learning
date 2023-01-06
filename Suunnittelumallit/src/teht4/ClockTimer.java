package teht4;

import java.util.ArrayList;
import java.util.Observable;
import java.util.Observer;

public class ClockTimer extends Observable {

    private int hour, minute, second;

    public ClockTimer(){
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }

    public int getHour() {
        return hour;
    }
    public int getMinute() {
        return minute;
    }
    public int getSecond() {
        return second;
    }

    public void tick(){
        second++;
        if(second >= 60){
            second = 0;
            minute++;
        }
        if(minute >= 60){
            second = 0;
            minute = 0;
            hour++;
        }
        if(hour >= 24){
            second = 0;
            minute = 0;
            hour = 0;
        }

        this.setChanged();
        notifyObservers();
    }
}
