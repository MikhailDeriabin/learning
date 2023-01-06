package teht17;

public class StringTest {
    public static void main(String[] args) {
        String fly = "fly", weight = "weight";
        String fly2 = "fly", weight2 = "weight";
        System.out.println("fly == fly2:\t\t\t\t\t" + (fly == fly2));       // fly and fly2 refer to the same String instance
        System.out.println("weight == weight2:\t\t\t\t" + (weight == weight2)); // weight and weight2 also refer to
        // the same String instance
        String distinctString = fly + weight;
        System.out.println("distinctString == \"flyweight\":\t" + (distinctString == "flyweight")); // flyweight and "flyweight" do not
        // refer to the same instance
        String flyweight = (fly + weight).intern();
        System.out.println("intern():\t\t\t\t\t\t" + (flyweight == "flyweight")); // The intern() method returns a flyweight
    }
}
