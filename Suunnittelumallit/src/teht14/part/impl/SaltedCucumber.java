package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Cucumber;

public class SaltedCucumber extends BurgerPart implements Cucumber {
    public SaltedCucumber() {
        super(0.7f);
    }

    @Override
    public String toString(){
        return "Salted cucumber " + super.getPrice() + "€";
    }
}
