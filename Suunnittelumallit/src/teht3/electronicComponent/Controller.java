package teht3.electronicComponent;

//leaf
public class Controller implements ElectronicComponent{
    private float price;

    public Controller(float price){
        this.price = price;
    }

    @Override
    public float getPrice() {
        return price;
    }

    @Override
    public void setPrice(float price) {
        this.price = price;
    }
}
