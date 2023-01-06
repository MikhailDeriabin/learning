package teht3.computerComponent;

//leaf
public class RAM extends ComputerComponent{
    private final String name = "RAM";
    private final float price = 100;

    public RAM(){
        super();

        super.setName(name);
        super.setPrice(price);
    }
}
