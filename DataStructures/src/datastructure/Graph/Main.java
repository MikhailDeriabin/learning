package datastructure.Graph;

public class Main {
    public static void main(String[] args) {
        int matrixSize = 5;
        MatrixGraph<Integer> matrix = new MatrixGraph<>(matrixSize);

        matrix.addNode(0, 1, 10);
        matrix.addNode(1, 2, 20);
        matrix.addNode(2, 3, 30);
        matrix.printGraph();

        ListGraph<String, Integer> listGraph = new ListGraph<>();
        Node<String, Integer> nodeA = new Node<>("A", 10);
        Node<String, Integer> nodeB = new Node<>("B", 20);
        Node<String, Integer> nodeC = new Node<>("C", 30);
        Node<String, Integer> nodeD = new Node<>("D", 40);

        nodeA.addNeighbour(nodeB);
        nodeA.addNeighbour(nodeC);
        nodeB.addNeighbour(nodeD);
        nodeC.addNeighbour(nodeD);

        listGraph.addNode(nodeA);
        listGraph.addNode(nodeB);
        listGraph.addNode(nodeC);
        listGraph.addNode(nodeD);

        listGraph.printNodes();
    }
}
