package SimpleFactory;

//Main class
public class Client {
    public static void main(String[] args) throws Exception {
        Meal soup = MealFactory.createMeal("soup");

        Meal potato = MealFactory.createMeal("potato");

    }

}
