package teht14;

import teht14.Burger.Burger;
import teht14.builder.Builder;
import teht14.builder.HesburgerBuilder;
import teht14.builder.MacBuilder;

public class Main {
    public static void main(String[] args) {
        Director director = new Director();

        Builder hesBuilder = new HesburgerBuilder();
        director.setBuilder(hesBuilder);
        director.createBurger();
        Burger hesBurger = hesBuilder.getBurger();
        hesBurger.printBurger();

        Builder macBuilder = new MacBuilder();
        director.setBuilder(macBuilder);
        director.createBurger();
        Burger macBurger = macBuilder.getBurger();
        macBurger.printBurger();
    }
}
