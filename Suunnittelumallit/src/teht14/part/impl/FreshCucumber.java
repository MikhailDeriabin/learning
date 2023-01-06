package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Cucumber;

public class FreshCucumber extends BurgerPart implements Cucumber {

    public FreshCucumber() {
        super(0.6f);
    }

    @Override
    public String toString(){
        return "Fresh cucumber " + super.getPrice() + "€";
    }
}
