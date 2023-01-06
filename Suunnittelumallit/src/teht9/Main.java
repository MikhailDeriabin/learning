package teht9;

public class Main {
    public static void main(String[] args) {

        Converter converter1 = new Converter(new EveryNodeConverter<>());
        String result1 = converter1.convertListToString();
        System.out.println(result1);

        System.out.println("----------------------------------------\n");

        Converter converter2 = new Converter(new EverySecondNodeConverter<>());
        String result2 = converter2.convertListToString();
        System.out.println(result2);


        System.out.println("----------------------------------------\n");

        Converter converter3 = new Converter(new EveryThirdNodeConverter<>());
        String result3 = converter3.convertListToString();
        System.out.println(result3);
    }
}
