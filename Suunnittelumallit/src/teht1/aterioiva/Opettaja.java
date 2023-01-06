package teht1.aterioiva;

import teht1.ateria.Juoma;
import teht1.ateria.Vesi;

public class Opettaja extends AterioivaOtus {
    @Override
    public Juoma createJuoma(){
        return new Vesi();
    }

    @Override
    public String toString(){
        return "Opettaja";
    }
}
