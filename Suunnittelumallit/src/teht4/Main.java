package teht4;

public class Main {
    public static void main(String[] args) {
        ClockTimer clock = new ClockTimer();
        DigitalClock observer = new DigitalClock(clock);
        for(int i=0; i<100000; i++){
            clock.tick();
        }
    }
}
