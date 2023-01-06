package teht18;

public class Main {
    public static void main(String[] args) {
        Kello kello = new Kello();

        goTwoMinForward(kello);
        System.out.println("Original clock shows:");
        kello.print();

        Kello clonedKello = kello.clone();
        System.out.println("Cloned clock shows:");
        clonedKello.print();

        System.out.println("\n---------------------------------------\n");

        goTwoMinForward(clonedKello);
        System.out.println("Clocks after cloned clock change:");
        System.out.println("Original clock shows:");
        kello.print();
        System.out.println("Cloned clock shows:");
        clonedKello.print();

        System.out.println("\n---------------------------------------\n");

        goTwoMinForward(kello);
        System.out.println("Clocks after original clock change:");
        System.out.println("Original clock shows:");
        kello.print();
        System.out.println("Cloned clock shows:");
        clonedKello.print();
    }

    public static void goTwoMinForward(Kello kello){
        for(int i=0; i<120; i++){
            kello.tick();
        }
    }
}
