package teht3.computerComponent;

import java.util.LinkedList;
import java.util.List;

//composite
public class Case extends ComputerComponent{
    private List<ComputerComponent> allComponents = new LinkedList<>();
    private final String name = "Case";
    private final float price = 100;

    public Case(){
        super();

        super.setName(name);
        super.setPrice(price);
    }

    public void addComponent(ComputerComponent component){
        allComponents.add(component);
    }

    public void removeComponent(ComputerComponent component){
        allComponents.remove(component);
    }

    public List<ComputerComponent> getAllComponents(){
        return this.allComponents;
    }

    @Override
    public float getPrice(){
        float totalPrice = this.price;
        for(ComputerComponent component : allComponents)
            totalPrice += component.getPrice();

        return totalPrice;
    }

    @Override
    public void printName(){
        System.out.println( name + " contains:");
        for(ComputerComponent component : allComponents)
            System.out.println(component + " by price " + component.getPrice());
    }
}
