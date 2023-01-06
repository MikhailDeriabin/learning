package teht20;

import java.util.Iterator;
import java.util.List;

public class IteratorThread extends Thread{
    private final String name;
    private List<Integer> list;
    private boolean isInterrupted;
    private Iterator<Integer> iterator;

    public IteratorThread(String name, List<Integer> list, Iterator<Integer> iterator) {
        this.name = name;
        this.list = list;
        this.iterator = iterator;
        isInterrupted = false;
    }

    @Override
    public void run(){
        if(iterator == null){
            iterator = list.iterator();
        }

        while(iterator.hasNext() && !isInterrupted){
            try {
                System.out.println(name + ": " + iterator.next());
            }catch (Exception e){
                Thread.currentThread().interrupt();
                System.out.println(name + " thread was interrupted. Failed to complete operation");
                isInterrupted = true;
                //e.printStackTrace();
            }
        }
        System.out.println(name + " thread executed");
    }

    public String getThreadName() {
        return name;
    }
}
