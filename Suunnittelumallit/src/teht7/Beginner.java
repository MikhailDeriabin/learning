package teht7;

public class Beginner implements CarLevel{
    @Override
    public int drive() {
        return 10;
    }

    @Override
    public int spendGasoline() {
        return 4;
    }

    @Override
    public void makeSound() {
        System.out.println("rip-rip-rip");
    }

    @Override
    public String toString(){
        return "beginner";
    }
}
