package teht14.Burger;

import teht14.part.interf.*;

import java.util.Iterator;

public class MacBurger implements Burger{

    private String bread;
    private String cheese;
    private String cucumber;
    private String meat;
    private String salad;
    private String tomato;

    private StringBuilder parts;

    public MacBurger() {
        parts = new StringBuilder();
    }

    public String getBread() {
        return bread;
    }
    public void setBread(Bread bread) {
        this.bread = bread.toString();
        parts.append(bread);
        parts.append("\n");
    }

    public String getCheese() {
        return cheese;
    }
    public void setCheese(Cheese cheese) {
        this.cheese = cheese.toString();
        parts.append(cheese);
        parts.append("\n");
    }

    public String getCucumber() {
        return cucumber;
    }
    public void setCucumber(Cucumber cucumber) {
        this.cucumber = cucumber.toString();
        parts.append(cucumber);
        parts.append("\n");
    }

    public String getMeat() {
        return meat;
    }
    public void setMeat(Meat meat) {
        this.meat = meat.toString();
        parts.append(meat);
        parts.append("\n");
    }

    public String getSalad() {
        return salad;
    }
    public void setSalad(Salad salad) {
        this.salad = salad.toString();
        parts.append(salad);
        parts.append("\n");
    }

    public String getTomato() {
        return tomato;
    }
    public void setTomato(Tomato tomato) {
        this.tomato = tomato.toString();
        parts.append(tomato);
        parts.append("\n");
    }

    @Override
    public void printBurger() {
        System.out.println("Mac burger: ");
        System.out.print(parts);
        System.out.println("-----------------------------\n");
    }
}
