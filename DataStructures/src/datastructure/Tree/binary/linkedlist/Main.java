package datastructure.Tree.binary.linkedlist;

public class Main {
    public static void main(String[] args) {
        //root elem
        Node<String> N1 = new Node<>("N1");

        //second level
        Node<String> N2 = new Node<>("N2");
        Node<String> N3 = new Node<>("N3");

        Node<Integer> test = new Node<>(45);

        //third level
        Node<String> N4 = new Node<>("N4");
        Node<String> N5 = new Node<>("N5");
        Node<String> N6 = new Node<>("N6");
        Node<String> N7 = new Node<>("N7");

        //fourth level
        Node<String> N8 = new Node<>("N8");
        Node<String> N9 = new Node<>("N9");

        //add elements to categories = create tree

        //second level
        N1.setLeftChild(N2);
        N1.setRightChild(N3);

        //third level: N2
        N2.setLeftChild(N4);
        N2.setRightChild(N5);

        //third level: N3
        N3.setLeftChild(N6);
        N3.setRightChild(N7);

        //fourth level: N4
        N4.setLeftChild(N8);
        N4.setRightChild(N9);

        BinaryTree<String> bt = new BinaryTree<>();
        bt.setRoot(N1);
        bt.levelOrderTraverse();

        Node<String> searchResult = bt.searchLevelOrder("N10");
        System.out.println("Search result: " + searchResult);

        Node<String> insertedNodeParent = bt.insertLevelOrder("N10");
        System.out.println("Inserted to " + insertedNodeParent);
        searchResult = bt.searchLevelOrder("N10");
        System.out.println("Search result: " + searchResult);

        Node<String> deepestNode = bt.findDeepestNodeLevelOrder();
        System.out.println("Deepest node: " + deepestNode);
        deepestNode = bt.deleteDeepestNodeLevelOrder();
        System.out.println("Deleted deepest node: " + deepestNode);

        Node<String> deletedNode = bt.deleteNodeLevelOrder("N5");
        bt.levelOrderTraverse();

    }
}
