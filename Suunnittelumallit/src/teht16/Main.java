package teht16;

import teht16.abstraction.Instagram;
import teht16.abstraction.Wikipedia;
import teht16.abstraction.Youtube;
import teht16.implementator.ILoader;
import teht16.implementator.Loader;

public class Main {
    public static void main(String[] args) {
        ILoader loader = new Loader();

        Instagram instagram = new Instagram(loader);
        Wikipedia wiki = new Wikipedia(loader);
        Youtube youtube = new Youtube(loader);

        System.out.println("Instagram page loading:");
        instagram.loadPage();
        System.out.println("\n-----------------------------\n");

        System.out.println("Wikipedia page loading:");
        wiki.loadPage();
        System.out.println("\n-----------------------------\n");

        System.out.println("Youtube page loading:");
        youtube.loadPage();
        System.out.println("\n-----------------------------\n");
    }
}
