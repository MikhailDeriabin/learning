package teht3.computerComponent;

//leaf
public class SSD extends ComputerComponent{
    private final String name = "SSD";
    private final float price = 50;

    public SSD(){
        super();

        super.setName(name);
        super.setPrice(price);
    }
}
