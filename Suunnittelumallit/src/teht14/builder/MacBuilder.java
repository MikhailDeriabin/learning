package teht14.builder;

import teht14.Burger.*;
import teht14.part.impl.*;

public class MacBuilder implements Builder{
    private final MacBurger burger;

    public MacBuilder() {
        this.burger = new MacBurger();
    }

    @Override
    public Builder withBread() {
        this.burger.setBread(new MacBread());
        return this;
    }

    @Override
    public Builder withCheese() {
        this.burger.setCheese(new EmmentalCheese());
        return this;
    }

    @Override
    public Builder withCucumber() {
        this.burger.setCucumber(new SaltedCucumber());
        return this;
    }

    @Override
    public Builder withMeat() {
        this.burger.setMeat(new FryedMeat());
        return this;
    }

    @Override
    public Builder withSalad() {
        this.burger.setSalad(new LeafSalad());
        return this;
    }

    @Override
    public Builder withTomato() {
        this.burger.setTomato(new CompariTomato());
        return this;
    }

    @Override
    public Burger getBurger() {
        return this.burger;
    }
}
