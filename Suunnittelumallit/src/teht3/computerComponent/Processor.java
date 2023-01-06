package teht3.computerComponent;

//leaf
public class Processor extends ComputerComponent{
    private final String name = "Processor";
    private final float price = 300;

    public Processor(){
        super();

        super.setName(name);
        super.setPrice(price);
    }
}
