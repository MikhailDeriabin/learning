package teht7;

public class Middle implements CarLevel{
    @Override
    public int drive() {
        return 20;
    }

    @Override
    public int spendGasoline() {
        return 2;
    }

    @Override
    public void makeSound() {
        System.out.println("br-br-br");
    }

    @Override
    public String toString(){
        return "middle";
    }
}
