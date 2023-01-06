package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Tomato;

public class CompariTomato extends BurgerPart implements Tomato {

    public CompariTomato() {
        super(1.6f);
    }

    @Override
    public String toString(){
        return "Compari tomato " + super.getPrice() + "€";
    }
}
