package teht8_10;

import java.util.Random;

public class Main {
    public static Random random = new Random();

    public static void main(String[] args) {
        System.out.println("\n------------Teht 8-------------\n");
        int maxNum = 99;
        int numCount = 17;
        TreePrinter<Integer> treePrinter = new TreePrinter<>();

        BST<Integer> bst = new BST<>();

        //inserting value, which should be found in the search test
        bst.insert(50);

        //generate random values
        for(int i=0; i<numCount; i++){
            int num = getRandNum(maxNum);
            bst.insert(num);
        }

        //print the tree
        treePrinter.print(bst.getRoot());

        //search test
        Node<Integer> shouldBeFound = bst.search(50);
        Node<Integer> shouldNotBeFound = bst.search(-56);

        System.out.println("Node should be found (50): " + shouldBeFound);
        System.out.println("Node should not be found (-56):  " + shouldNotBeFound);


        System.out.println("\n------------Teht 9 ja 10-------------\n");

        System.out.println("How to read? value height:depth");
        BST<Integer> bst1 = new BST<>();
        bst1.insert(12);
        bst1.insert(4);
        bst1.insert(20);
        bst1.insert(1);
        bst1.insert(8);
        bst1.insert(16);
        bst1.insert(17);
        bst1.insert(27);
        bst1.insert(25);

        bst1.insert(28);
        bst1.insert(29);

        treePrinter.print(bst1.getRoot());

        System.out.println("\n-------------------------\n");

        //leaf removing
        bst1.remove(29);
        System.out.println("Leaf removing operation(29):");
        System.out.println("How to read? value height:depth");
        treePrinter.print(bst1.getRoot());

        //node with one child removing
        bst1.remove(16);
        System.out.println("Node with one child removing(16):");
        System.out.println("How to read? value height:depth");
        treePrinter.print(bst1.getRoot());

        //node with two children removing
        bst1.remove(12);
        System.out.println("Node with two children removing(12):");
        System.out.println("How to read? value height:depth");
        treePrinter.print(bst1.getRoot());
    }

    public static int getRandNum(int maxRandNum){
        return random.nextInt(maxRandNum+1);
    }
}
