package teht18;

public class Kello implements Cloneable{
    private Viisari secViisari, minViisari, hourViisari;

    public Kello() {
        this.secViisari = new Viisari();
        this.minViisari = new Viisari();
        this.hourViisari = new Viisari();
    }

    public void tick(){
        secViisari.plusOne();

        if(secViisari.getValue() >= 60){
            secViisari.setValue(0);
            minViisari.plusOne();
        }
        if(minViisari.getValue() >= 60){
            secViisari.setValue(0);
            minViisari.setValue(0);
            hourViisari.plusOne();
        }
        if(hourViisari.getValue() >= 24){
            secViisari.setValue(0);
            minViisari.setValue(0);
            hourViisari.setValue(0);
        }
    }

    public void print(){
        int hour = hourViisari.getValue();
        int minute = minViisari.getValue();
        int second = secViisari.getValue();
        System.out.println(hour + ":" + minute + ":" + second);
    }

    @Override
    public Kello clone() {
        Kello clonedKello = null;
        try {
            clonedKello = (Kello) super.clone();

            clonedKello.secViisari = secViisari.clone();
            clonedKello.minViisari = minViisari.clone();
            clonedKello.hourViisari = hourViisari.clone();
        } catch (CloneNotSupportedException e) {
            System.out.println("Could not copy the object");
        }

        return clonedKello;
    }
}
