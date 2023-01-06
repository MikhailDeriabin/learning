package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Tomato;

public class CherryTomato extends BurgerPart implements Tomato {
    public CherryTomato() {
        super(1.7f);
    }

    @Override
    public String toString(){
        return "Cherry tomato " + super.getPrice() + "€";
    }
}
