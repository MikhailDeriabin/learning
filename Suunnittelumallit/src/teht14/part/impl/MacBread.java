package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Bread;

public class MacBread extends BurgerPart implements Bread {

    public MacBread() {
        super(1);
    }

    @Override
    public String toString(){
        return "Mac bread " + super.getPrice() + "€";
    }
}
