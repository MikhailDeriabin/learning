package teht18;

public class Viisari implements Cloneable{
    private int value;

    public Viisari() {
        this.value = 0;
    }

    public void plusOne(){
        value++;
    }
    public void minusOne(){
        value--;
    }

    @Override
    public Viisari clone() {
        Viisari clonedViisari = null;
        try {
            clonedViisari = (Viisari) super.clone();
            clonedViisari.value = 0;
        } catch (CloneNotSupportedException e) {
            System.out.println("Could not copy the object");
        }

        return clonedViisari;
    }

    public int getValue() {
        return value;
    }
    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public  String toString(){
        return value + "";
    }
}
