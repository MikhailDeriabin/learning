package teht18;

import java.util.Random;
import java.util.TreeSet;

public class Main {
    public static Random random = new Random();

    public static void main(String[] args) {
        int maxNum = 1000000000;
        int numCount = 10000000;
        Integer[] randNumArr = new Integer[numCount];

        BST<Integer> bst = new BST<>();
        TreeSet<Integer> treeSet = new TreeSet<>();

        //generate random values
        for(int i=0; i<numCount; i++){
            randNumArr[i] = getRandNum(maxNum);
        }

        //own tree
        long ownStartTime = System.nanoTime();
        for(int i=0; i<randNumArr.length; i++){
            bst.insert(randNumArr[i]);
        }
        bst.traverse();
        long ownEndTime = System.nanoTime();

        //java tree
        long javaStartTime = System.nanoTime();
        for(int i=0; i<randNumArr.length; i++){
            treeSet.add(randNumArr[i]);
        }
        for(Integer num : treeSet)
            System.out.print(num + " ");
        long javaEndTime = System.nanoTime();

        //print results
        System.out.println();
        System.out.println("Settings: number count " + numCount + ", range 0-" + maxNum);
        System.out.println("Own BST time: " + (double)(ownEndTime-ownStartTime)/1000/1000 + " ms");
        System.out.println("Java TreeSet time: " + (double)(javaEndTime-javaStartTime)/1000/1000 + " ms");
    }

    public static int getRandNum(int maxRandNum){
        return random.nextInt(maxRandNum+1);
    }
}
