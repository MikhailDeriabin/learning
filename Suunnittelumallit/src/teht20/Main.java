package teht20;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        List<Integer> list3 = new ArrayList<>();
        List<Integer> list4 = new ArrayList<>();

        for(int i=0; i<10; i++){
            list1.add(i);
            list2.add(i);
            list3.add(i);
            list4.add(i);
        }

        IteratorThread ownIterThread1 = new IteratorThread("Thread 1 (own iterator)", list1, null);
        IteratorThread ownIterthread2 = new IteratorThread("Thread 2 (own iterator)", list1, null);

        System.out.println("----------------- Own iterator: -------------------");
        ownIterThread1.start();
        ownIterthread2.start();

        ownIterthread2.join();

        Iterator<Integer> iter = list2.iterator();
        IteratorThread commonIterThread1 = new IteratorThread("Thread 1 (common iterator)", list2, iter);
        IteratorThread commonIterThread2 = new IteratorThread("Thread 2 (common iterator)", list2, iter);

        System.out.println("\n----------------- Common iterator: -------------------");
        commonIterThread1.start();
        commonIterThread2.start();

        commonIterThread2.join();

        IteratorThread ownIterChangesThread1 = new IteratorThread("Thread 1 (own iterator changes)", list3, null);
        IteratorThread ownIterChangesThread2 = new IteratorThread("Thread 2 (own iterator changes)", list3, null);
        Iterator<Integer> iter1 = list3.iterator();
        IteratorThread commonIterChangesThread1 = new IteratorThread("Thread 3 (common iterator changes)", list3, iter1);
        IteratorThread commonIterChangesThread2 = new IteratorThread("Thread 4 (common iterator changes)", list3, iter1);

        System.out.println("\n----------------- Own and common iterators threads. Changes in the list: -------------------");
        ownIterChangesThread1.start();
        ownIterChangesThread2.start();
        commonIterChangesThread1.start();
        commonIterChangesThread2.start();

        list3.add(-1);

        commonIterChangesThread2.join();

        IteratorRemoveThread ownIterRemoveThread1 = new IteratorRemoveThread("Thread 1 (own iterator remove)", list4, null);
        IteratorRemoveThread ownIterRemoveThread2 = new IteratorRemoveThread("Thread 2 (own iterator remove)", list4, null);
        Iterator<Integer> iter2 = list4.iterator();
        IteratorRemoveThread commonIterRemoveThread1 = new IteratorRemoveThread("Thread 3 (common iterator remove)", list4, iter2);
        IteratorRemoveThread commonIterRemoveThread2 = new IteratorRemoveThread("Thread 4 (common iterator remove)", list4, iter2);
        System.out.println("\n----------------- Own and common iterators threads. remove() method called each iteration: -------------------");
        ownIterRemoveThread1.start();
        ownIterRemoveThread2.start();
        commonIterRemoveThread1.start();
        commonIterRemoveThread2.start();
    }
}
