package teht9;

import java.util.List;

public class EverySecondNodeConverter<T> implements ListConverter<T>{
    @Override
    public String listToString(List<T> list) {
        StringBuilder result = new StringBuilder();

        String[] array = new String[list.size()];

        for(int i=0; i< array.length; i++)
            array[i] = list.get(i).toString();

        for(int i=0; i<array.length-1; i+=2)
            result.append(array[i]).append("\t\t").append(array[i+1]).append("\n");

        if(array.length % 2 != 0)
            result.append(array[array.length-1]);

        return result.toString();
    }
}
