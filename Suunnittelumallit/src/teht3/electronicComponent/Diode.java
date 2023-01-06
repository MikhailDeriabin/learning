package teht3.electronicComponent;

//leaf
public class Diode implements ElectronicComponent{
    private float price;

    public Diode(float price){
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
