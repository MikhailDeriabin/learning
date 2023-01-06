package datastructure.Tree.BST.version1;

public class Main {
    public static void main(String[] args) {
        BST<Integer> bst = new BST<>();

        bst.insert(70);
        bst.insert(50);
        bst.insert(30);
        bst.insert(60);
        bst.insert(20);
        bst.insert(40);
        bst.insert(90);
        bst.insert(80);
        bst.insert(100);

        bst.levelOrderTraverse();

    /*
        System.out.println("\n----------------------------------\n");

        datastructure.HashTable.chainig.Node<Integer> nodeToFind = bst.search(bst.getRoot(), 40);
        System.out.println("Search result: " + nodeToFind);

        System.out.println("\n----------------------------------\n");

        bst.delete(bst.getRoot(), 50);
        bst.levelOrderTraverse();*/
    }
}
