package teht1.aterioiva;

import teht1.ateria.Juoma;
import teht1.ateria.Limsa;

public class Ohjelmoija extends AterioivaOtus{
    @Override
    public Juoma createJuoma() {
        return new Limsa();
    }

    @Override
    public String toString(){
        return "Ohjelmoija";
    }
}
