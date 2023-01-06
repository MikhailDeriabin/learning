package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Cheese;

public class EmmentalCheese extends BurgerPart implements Cheese {

    public EmmentalCheese() {
        super(1.5f);
    }

    @Override
    public String toString(){
        return "Emmental cheese " + super.getPrice() + "€";
    }
}
