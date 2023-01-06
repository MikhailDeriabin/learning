package teht13.state;

public class Super implements CarLevel {
    @Override
    public int drive() {
        return 30;
    }

    @Override
    public int spendGasoline() {
        return 1;
    }

    @Override
    public void makeSound() {
        System.out.println("vroom-vroom");
    }

    @Override
    public String toString(){
        return "super";
    }
}
