package teht3.electronicComponent;

import java.util.LinkedList;
import java.util.List;

//leaf
public class ElectronicBoard implements ElectronicComponent{
    private float totalPrice = 0;
    private List<ElectronicComponent> allComponents = new LinkedList<>();

    public void addComponent(ElectronicComponent component){
        allComponents.add(component);
    }

    public void removeComponent(ElectronicComponent component){
        allComponents.remove(component);
    }

    @Override
    public float getPrice() {
        float totalPrice = 0;
        for(ElectronicComponent c : allComponents){
            totalPrice += c.getPrice();
        }

        return totalPrice;
    }

    @Override
    public void setPrice(float price) {
        this.totalPrice = price;
    }
}
