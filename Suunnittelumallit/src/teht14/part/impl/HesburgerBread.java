package teht14.part.impl;

import teht14.part.interf.Bread;
import teht14.part.interf.BurgerPart;

public class HesburgerBread extends BurgerPart implements Bread {

    public HesburgerBread() {
        super(1.1f);
    }

    @Override
    public String toString(){
        return "Hesburger bread " + super.getPrice() + "€";
    }
}
