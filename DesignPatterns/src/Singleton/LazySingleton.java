package Singleton;

public class LazySingleton {
    private LazySingleton(){}

    private static volatile LazySingleton instance;

    public static LazySingleton getInstance(){
        if(instance == null){
            //Make sure there is no possibility to create multiple instances in the case of multithreading
            synchronized (LazySingleton.class){
                if(instance == null)
                    instance = new LazySingleton();
            }
        }

        return instance;
    }
}
