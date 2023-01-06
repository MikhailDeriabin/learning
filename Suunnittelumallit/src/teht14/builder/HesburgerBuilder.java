package teht14.builder;

import teht14.Burger.*;
import teht14.part.impl.*;

public class HesburgerBuilder implements Builder{
    private HesburgerBurger burger;

    public HesburgerBuilder() {
        burger = new HesburgerBurger();
    }

    @Override
    public Builder withBread() {
        this.burger.setBread(new HesburgerBread());
        return this;
    }

    @Override
    public Builder withCheese() {
        this.burger.setCheese(new EdamCheese());
        return this;
    }

    @Override
    public Builder withCucumber() {
        this.burger.setCucumber(new FreshCucumber());
        return this;
    }

    @Override
    public Builder withMeat() {
        this.burger.setMeat(new BackedMeat());
        return this;
    }

    @Override
    public Builder withSalad() {
        this.burger.setSalad(new IcebergSalad());
        return this;
    }

    @Override
    public Builder withTomato() {
        this.burger.setTomato(new CherryTomato());
        return this;
    }

    @Override
    public Burger getBurger() {
        return this.burger;
    }
}
