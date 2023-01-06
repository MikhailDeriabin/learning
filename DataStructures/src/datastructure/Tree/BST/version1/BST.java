package datastructure.Tree.BST.version1;

import java.util.LinkedList;
import java.util.Queue;

//Binary search tree
public class BST<T extends Comparable<T>> {
    private Node<T> root;

    public BST() {
        this.root = null;
    }

    public void levelOrderTraverse(){
        Queue<Node<T>> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()){
            Node<T> presentNode = queue.remove();

            System.out.println(presentNode);

            Node<T> leftNode = presentNode.getLeftChild();
            Node<T> rightNode = presentNode.getRightChild();
            if(leftNode != null)
                queue.add(leftNode);

            if(rightNode != null)
                queue.add(rightNode);
        }
    }

    //my solution of insert
    public void addNode(Node<T> node, Node<T> parent){
        if(root == null){
            this.root = node;
        } else{
            Node<T> leftNode = parent.getLeftChild();
            Node<T> rightNode = parent.getRightChild();

            if(node.compareTo(parent) <= 0){
                if(leftNode != null){
                    addNode(node, leftNode);
                } else{
                    parent.setLeftChild(node);
                }
            } else{
                if(rightNode != null){
                    addNode(node, rightNode);
                } else{
                    parent.setRightChild(node);
                }
            }
        }
    }

    private Node<T> insert(Node<T> currentNode, T data){
        if(currentNode == null){
            return new Node<>(data);
        } else if(data.compareTo(currentNode.getData()) <= 0){
            Node<T> newNode = insert(currentNode.getLeftChild(), data);
            currentNode.setLeftChild(newNode);
            return currentNode;
        } else{
            Node<T> newNode = insert(currentNode.getRightChild(), data);
            currentNode.setRightChild(newNode);
            return currentNode;
        }
    }

    public void insert(T data){
        if(this.root != null)
            insert(root, data);
        else
            this.root = new Node<>(data);
    }

    public Node<T> search(Node<T> node, T data){
        if(node == null){
            return null;
        }
        T nodeData = node.getData();

        if(data.compareTo(nodeData) == 0){
            return node;
        } else if(data.compareTo(nodeData) < 0){
            return search(node.getLeftChild(), data);
        } else{
            return search(node.getRightChild(), data);
        }
    }

    public Node<T> getMinNode(Node<T> root){
        if(root.getLeftChild() == null){
            return root;
        } else {
            return getMinNode(root.getLeftChild());
        }
    }

    public Node<T> delete(Node<T> root, T data){
        if(root == null){
            return null;
        }

        T rootData = root.getData();
        Node<T> leftChild = root.getLeftChild();
        Node<T> rightChild = root.getRightChild();

        if(data.compareTo(rootData) < 0){
            root.setLeftChild(delete(leftChild, data));
        } else if(data.compareTo(rootData) > 0) {
            root.setRightChild(delete(rightChild, data));
        } else{
            if(leftChild != null && rightChild != null){
                Node<T> minNodeForRight = getMinNode(root.getRightChild());
                T minNodeData = minNodeForRight.getData();
                root.setData(minNodeData);
                Node<T> deletedNode = delete(rightChild, minNodeData);
                root.setRightChild(deletedNode);
            } else if(leftChild != null){
                root = leftChild;
            } else if(rightChild != null){
                root = rightChild;
            } else{
                root = null;
            }
        }

        return root;
    }

    public void deleteBST(){
        this.root = null;
    }

    public Node<T> getRoot() {
        return root;
    }
    public void setRoot(Node<T> root) {
        this.root = root;
    }
}
