package Singleton;

//Instance will be automatically created in the compilation time
public class EagerSingleton {
    private EagerSingleton(){}

    private static final EagerSingleton instance = new EagerSingleton();

    public static EagerSingleton getInstance(){
        return instance;
    }
}
