package datastructure.Tree.binary.linkedlist;

import java.util.LinkedList;
import java.util.Queue;

public class BinaryTree<T> {
    Node<T> root;

    public BinaryTree() {
        this.root = null;
    }

    public void preOrderTraverse(Node<T> parent){
        if(parent != null){
            Node<T> leftNode = parent.getLeftChild();
            Node<T> rightNode = parent.getRightChild();

            System.out.println(parent);
            preOrderTraverse(leftNode);
            preOrderTraverse(rightNode);
        }
    }

    public void inOrderTraverse(Node<T> parent){
        if(parent != null){
            Node<T> leftNode = parent.getLeftChild();
            Node<T> rightNode = parent.getRightChild();

            inOrderTraverse(leftNode);
            System.out.println(parent);
            inOrderTraverse(rightNode);
        }
    }

    public void postOrderTraverse(Node<T> parent){
        if(parent != null){
            Node<T> leftNode = parent.getLeftChild();
            Node<T> rightNode = parent.getRightChild();

            postOrderTraverse(leftNode);
            postOrderTraverse(rightNode);
            System.out.println(parent);
        }
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

    public Node<T> searchLevelOrder(T nodeData){
        Node<T> result = null;
        Queue<Node<T>> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()){
            Node<T> currentNode = queue.remove();
            if(currentNode.getData().equals(nodeData)){
                result = currentNode;
                break;
            } else{
                Node<T> leftChild = currentNode.getLeftChild();
                Node<T> rightChild = currentNode.getRightChild();
                if(leftChild != null)
                    queue.add(currentNode.getLeftChild());
                if(rightChild != null)
                    queue.add(currentNode.getRightChild());
            }
        }

        return result;
    }

    public Node<T> insertLevelOrder(T data){
        Node<T> result = null;
        Queue<Node<T>> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()){
            Node<T> currentNode = queue.remove();
            Node<T> left = currentNode.getLeftChild();
            Node<T> right = currentNode.getRightChild();

            if (left == null){
                currentNode.setLeftChild(new Node<>(data));
                result = currentNode;
                break;
            } else if(right == null){
                currentNode.setRightChild(new Node<>(data));
                result = currentNode;
                break;
            }

            queue.add(left);
            queue.add(right);
        }

        return result;
    }

    public Node<T> findDeepestNodeLevelOrder(){
        Node<T> result = null;
        Queue<Node<T>> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()){
            result = queue.remove();
            if(result.getLeftChild() != null)
                queue.add(result.getLeftChild());
            if(result.getRightChild() != null)
                queue.add(result.getRightChild());
        }

        return result;
    }

    public Node<T> deleteDeepestNodeLevelOrder(){
        Node<T> result = null;
        Queue<Node<T>> queue = new LinkedList<>();
        queue.add(root);

        Node<T> previousNode, currentNode = null;
        while (!queue.isEmpty()){
            previousNode = currentNode;
            currentNode = queue.remove();
            if(currentNode.getLeftChild() == null){
                result = previousNode.getRightChild();
                previousNode.setRightChild(null);
                break;
            } else if(currentNode.getRightChild() == null){
                result = currentNode.getLeftChild();
                currentNode.setLeftChild(null);
                break;
            }

            queue.add(currentNode.getLeftChild());
            queue.add(currentNode.getRightChild());
        }

        return result;
    }

    public Node<T> deleteNodeLevelOrder(T nodeData){
        Node<T> result = null;
        Queue<Node<T>> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()){
            Node<T> currentNode = queue.remove();
            if(currentNode.getData().equals(nodeData)){
                result = currentNode;
                Node<T> deepestNode = findDeepestNodeLevelOrder();
                currentNode.setData(deepestNode.getData());
                deleteDeepestNodeLevelOrder();
                break;
            } else{
                Node<T> leftChild = currentNode.getLeftChild();
                Node<T> rightChild = currentNode.getRightChild();
                if(leftChild != null)
                    queue.add(currentNode.getLeftChild());
                if(rightChild != null)
                    queue.add(currentNode.getRightChild());
            }
        }

        return result;
    }

    public void deleteTree(){
        setRoot(null);
    }

    public Node<T> getRoot() {
        return root;
    }
    public void setRoot(Node<T> root) {
        this.root = root;
    }
}


















