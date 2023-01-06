package teht14;

public class Main {
    public static void main(String[] args) {
        PostFixCalculator calculator = new PostFixCalculator();

        String test1 = "(3+4)*(5/2)";
        String test2 = "23+89";
        String test3 = "1+2*3+2";

        double result1 = calculator.calculate(test1);
        double result2 = calculator.calculate(test2);
        double result3 = calculator.calculate(test3);

        System.out.println(test1 + " = " + result1);
        System.out.println(test2 + " = " + result2);
        System.out.println(test3 + " = " + result3);
    }
}
