package datastructure.Graph;

public class MatrixGraph<T> {
    private T[][] graph;

    public MatrixGraph(int nodeCount) {
        this.graph = (T[][]) new Object[nodeCount][nodeCount];
    }

    public void addNode(int nodeIndex, int nodeToAddIndex, T edgeValue){
        if(nodeIndex < graph.length && nodeToAddIndex < graph.length){
            graph[nodeIndex][nodeToAddIndex] = edgeValue;
        } else{
            System.out.println("Wrong indexes provided");
            throw new ArrayIndexOutOfBoundsException();
        }
    }

    public void printGraph(){
        for(int i=0; i< graph.length; i++){
            for(int j=0; j< graph.length; j++){
                System.out.print(graph[i][j] + " ");
            }
            System.out.println();
        }
    }

    public T[][] getGraph() {
        return graph;
    }
}
