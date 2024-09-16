package org.patterns.patterns.bridge;

import org.patterns.patterns.IRunner;

public class Runner implements IRunner{

    @Override
    public void run(int exampleNum) {
        IFifoCollection<String> collection = new Queue<String>(new SinglyLinkedList<String>());

        collection.offer("lol");
        collection.offer("kek");

        String item = collection.poll();
        System.out.println(item);
    }
}
