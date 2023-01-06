package teht20.sorts;

import teht20.TrafficCard;

import java.util.Comparator;

public class CardNameSort implements Comparator<TrafficCard> {

    @Override
    public int compare(TrafficCard o1, TrafficCard o2) {
        return o1.getmOwnerName().compareTo(o2.getmOwnerName());
    }
}
