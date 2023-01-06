package Builder;

public class Director {
    public static void main(String[] args) {
        DogBuilder dogBuilder = new DogBuilder();
        Dog myDog = (Dog) dogBuilder
                .withName("Jack")
                .withColor("brown")
                .withAge(12)
                .withOwner("Homer")
                .build();
        System.out.println(myDog);
        System.out.println("Owner: " + myDog.getOwner());
        System.out.println("Color: " + myDog.getColor());
    }
}
