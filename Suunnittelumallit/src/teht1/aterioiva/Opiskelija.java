package teht1.aterioiva;

import teht1.ateria.Juoma;
import teht1.ateria.Kahvi;

public class Opiskelija extends AterioivaOtus{
    @Override
    public Juoma createJuoma(){
        return new Kahvi();
    }

    @Override
    public String toString(){
        return "Opiskelija";
    }
}
