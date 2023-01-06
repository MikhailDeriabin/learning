package teht14.part.impl;

import teht14.part.interf.BurgerPart;
import teht14.part.interf.Salad;

public class IcebergSalad extends BurgerPart implements Salad {
    public IcebergSalad() {
        super(0.8f);
    }

    @Override
    public String toString(){
        return "Iceberg salad " + super.getPrice() + "€";
    }
}
