package datastructure.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new Queue<String>();

        queue.enqueue("1 elem");
        queue.enqueue("2 elem");
        queue.enqueue("3 elem");
        queue.enqueue("4 elem");

        System.out.println("Size: " + queue.size());
        queue.printAllNodes();
        System.out.println("-------------");

        while (queue.peek() != null){
           queue.dequeue();
        }

        System.out.println("Size: " + queue.size());
        queue.printAllNodes();
    }
}
