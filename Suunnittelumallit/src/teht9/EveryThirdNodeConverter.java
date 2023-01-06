package teht9;

import java.util.List;

public class EveryThirdNodeConverter<T> implements ListConverter<T>{
    @Override
    public String listToString(List<T> list) {
        StringBuilder result = new StringBuilder();

        for (int i=0; i<list.size()-2; i+=3){
            result.append(list.get(i)).append("\t\t");
            result.append(list.get(i+1)).append("\t\t");
            result.append(list.get(i+2)).append("\n");
        }

        if(list.size() % 2 == 0)
            result.append(list.get(list.size()-1));

        return result.toString();
    }
}
