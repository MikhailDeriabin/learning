package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Meat;

public class FryedMeat extends BurgerPart implements Meat {

    public FryedMeat() {
        super(2);
    }

    @Override
    public String toString(){
        return "Fryed meat " + super.getPrice() + "€";
    }
}
