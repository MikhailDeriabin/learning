package teht9;

import java.util.ArrayList;
import java.util.List;

public class Converter {
    //Miksi generoidaan kontekstissa, eikä asiakas-luokassa?
    private List<String> list;
    private final ListConverter<String> listConverter;

    public Converter(ListConverter<String> listConverter) {
        this.listConverter = listConverter;
        this.list = generateList(10);
    }

    public String convertListToString(){
        return listConverter.listToString(list);
    }

    private List<String> generateList(int elemCount){
        List<String> result = new ArrayList<>();
        for(int i=0; i<elemCount; i++)
            result.add((i+1) + " elem");
        return result;
    }
}
