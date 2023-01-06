package Singleton;

public class Main {
    public static void main(String[] args) {
        EagerSingleton eagerSingleton = EagerSingleton.getInstance();

        LazySingleton lazySingleton = LazySingleton.getInstance();
    }
}
