package SimpleFactory;

//SimpleFactory
public class MealFactory {
    public static Meal createMeal(String mealName) throws Exception {
        switch(mealName){
            case "soup":
                return new Soup();
            case "potato":
                return new Potato();
            default:
                throw new Exception("Meal name not found");
        }
    }
}
