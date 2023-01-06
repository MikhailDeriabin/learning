package teht14;

import teht14.Burger.Burger;
import teht14.builder.Builder;

public class Director {
    private Builder builder;

    public void setBuilder(Builder builder) {
        this.builder = builder;
    }

    public void createBurger(){
        builder.withBread()
                .withCheese()
                .withCucumber()
                .withMeat()
                .withSalad()
                .withTomato();
    }
}
