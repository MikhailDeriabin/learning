package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Cheese;

public class EdamCheese extends BurgerPart implements Cheese {

    public EdamCheese() {
        super(1.4f);
    }

    @Override
    public String toString(){
        return "Edam cheese " + super.getPrice() + "€";
    }
}
