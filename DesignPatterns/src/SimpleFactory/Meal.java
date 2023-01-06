package SimpleFactory;

//Product
public abstract class Meal {
    private String name;
    private String weight;
    private float calories;

    public void printMealData(){
        System.out.println("Name: " + name + "\n" + "Weight: " + weight + "\n" + "Calories: " + calories);
    }
}
