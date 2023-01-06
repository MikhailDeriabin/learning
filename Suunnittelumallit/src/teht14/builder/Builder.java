package teht14.builder;

import teht14.Burger.Burger;
import teht14.part.interf.*;

public interface Builder {
    Builder withBread();
    Builder withCheese();
    Builder withCucumber();
    Builder withMeat();
    Builder withSalad();
    Builder withTomato();
    Burger getBurger();
}
