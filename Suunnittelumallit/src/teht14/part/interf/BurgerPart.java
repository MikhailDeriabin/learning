package teht14.part.interf;

public abstract class BurgerPart {
    private float price;

    protected BurgerPart(float price){
        this.price = price;
    }

    public float getPrice(){
        return this.price;
    }
}
