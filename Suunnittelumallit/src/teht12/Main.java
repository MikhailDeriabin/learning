package teht12;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(final String[] arguments) {
        ImageFactory imgFactory = new ImageFactory();

        List<Image> imgFolder = new LinkedList<>();
        for(int i=1; i<=10; i++){
            Image newImg = imgFactory.getImage("image_" + i);
            imgFolder.add(newImg);
        }

        System.out.println("\n---------------Check photos data----------------\n");

        for(Image img : imgFolder){
            img.showData();
        }

        System.out.println("\n---------------Load and display photos----------------\n");

        for(Image img : imgFolder){
            img.displayImage();
        }
    }
}
