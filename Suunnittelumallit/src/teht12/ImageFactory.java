package teht12;

public class ImageFactory {
    public Image getImage(String name){
        return new ProxyImage(name);
    }
}
