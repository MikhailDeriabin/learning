package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Meat;

public class BackedMeat extends BurgerPart implements Meat {
    public BackedMeat() {
        super(2.5f);
    }

    @Override
    public String toString(){
        return "Backed meat " + super.getPrice() + "€";
    }
}
