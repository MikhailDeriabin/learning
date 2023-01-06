package teht9;

import java.util.Iterator;
import java.util.List;

public class EveryNodeConverter<T> implements ListConverter<T>{
    @Override
    public String listToString(List<T> list) {
        StringBuilder result = new StringBuilder();

        Iterator<T> iterator = list.iterator();
        while (iterator.hasNext()){
            result.append(iterator.next()).append("\n");
        }

        return result.toString();
    }
}
