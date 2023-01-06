package teht20.sorts;

import teht20.TrafficCard;

import java.util.Comparator;

public class CardNumberSort implements Comparator<TrafficCard> {

    @Override
    public int compare(TrafficCard o1, TrafficCard o2) {
        return o1.getmTravellerNumber() - o2.getmTravellerNumber();
    }
}
