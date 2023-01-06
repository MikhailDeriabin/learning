package teht14.Burger;

import teht14.part.interf.*;
import teht14.part.interf.BurgerPart;

import java.util.ArrayList;

public class HesburgerBurger implements Burger{

    private Bread bread;
    private Cheese cheese;
    private Cucumber cucumber;
    private Meat meat;
    private Salad salad;
    private Tomato tomato;

    private final ArrayList<BurgerPart> parts;

    public HesburgerBurger() {
        this.parts = new ArrayList<>();
    }

    public Bread getBread() {
        return bread;
    }
    public void setBread(Bread bread) {
        this.bread = bread;
        parts.add((BurgerPart) bread);
    }

    public Cheese getCheese() {
        return cheese;
    }
    public void setCheese(Cheese cheese) {
        this.cheese = cheese;
        parts.add((BurgerPart) cheese);
    }

    public Cucumber getCucumber() {
        return cucumber;
    }
    public void setCucumber(Cucumber cucumber) {
        this.cucumber = cucumber;
        parts.add((BurgerPart) cucumber);
    }

    public Meat getMeat() {
        return meat;
    }
    public void setMeat(Meat meat) {
        this.meat = meat;
        parts.add((BurgerPart) meat);
    }

    public Salad getSalad() {
        return salad;
    }
    public void setSalad(Salad salad) {
        this.salad = salad;
        parts.add((BurgerPart) salad);
    }

    public Tomato getTomato() {
        return tomato;
    }
    public void setTomato(Tomato tomato) {
        this.tomato = tomato;
        parts.add((BurgerPart) tomato);
    }

    @Override
    public void printBurger() {
        System.out.println("Hesburger burger: ");
        for(BurgerPart part : parts){
            System.out.println(part + " ");
        }
        System.out.println("-----------------------------\n");
    }
}
