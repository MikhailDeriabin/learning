package teht11;

public class ArvuuttajaCareTaker {
    private final Arvuuttaja arvuuttaja;

    public ArvuuttajaCareTaker(Arvuuttaja arvuuttaja) {
        this.arvuuttaja = arvuuttaja;
    }

    public Object liityPeliin(Pelaaja player){
        return arvuuttaja.liityPeliin(player);
    }

    public boolean arvaus(int guess, Object pelaajaState){
        return arvuuttaja.arvaus(guess, pelaajaState);
    }
}
