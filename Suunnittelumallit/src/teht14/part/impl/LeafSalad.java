package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Salad;

public class LeafSalad extends BurgerPart implements Salad {

    public LeafSalad() {
        super(0.7f);
    }

    @Override
    public String toString(){
        return "Leaf salad " + super.getPrice() + "€";
    }
}
