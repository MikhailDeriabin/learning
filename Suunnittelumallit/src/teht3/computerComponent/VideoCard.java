package teht3.computerComponent;

//leaf
public class VideoCard extends ComputerComponent{
    private final String name = "Video card";
    private final float price = 500;

    public VideoCard(){
        super();

        super.setName(name);
        super.setPrice(price);
    }
}
