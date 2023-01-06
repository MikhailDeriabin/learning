package datastructure.Tree.BST.version2;

public class Main {
    public static void main(String[] args) {
        TreePrinter<Integer> treePrinter = new TreePrinter<>();

        BST<Integer> bst = new BST<>();
        bst.insert(12);
        bst.insert(4);
        bst.insert(20);
        bst.insert(1);
        bst.insert(8);
        bst.insert(16);
        bst.insert(17);
        bst.insert(18);
        bst.insert(27);
        bst.insert(25);
        bst.insert(24);
        bst.insert(23);

        bst.insert(28);
        bst.insert(29);

        treePrinter.print(bst.getRoot());

        System.out.println("\n-------------------------\n");

        bst.remove(12);
        treePrinter.print(bst.getRoot());
    }
}
