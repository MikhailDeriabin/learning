package teht3.computerComponent;

public abstract class ComputerComponent {
    private String name;
    private float price;

    public void printName() {
        System.out.println(name);
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString(){
        return "Computer component " + name;
    }
}
