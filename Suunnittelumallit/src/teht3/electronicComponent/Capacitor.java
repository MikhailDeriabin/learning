package teht3.electronicComponent;

//leaf
public class Capacitor implements ElectronicComponent{
    private float price;

    public Capacitor(float price){
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
