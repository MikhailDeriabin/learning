package datastructure.Tree.BST.version2;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class BST<T extends Comparable<T>> implements Tree<T>{

    private Node<T> root;

    @Override
    public void insert(T data) {
        if(root == null){
            root = new Node<>(data, null);
        } else{
            insert(data, root);
        }
    }

    private void insert(T data, Node<T> node) {
        Node<T> leftChild = node.getLeftChild();
        Node<T> rightChild = node.getRightChild();

        if(data.compareTo(node.getData()) <= 0){
            if(leftChild != null)
                insert(data, leftChild);
            else{
                node.setLeftChild(new Node<>(data, node));
                if(rightChild == null){
                    node.updateHeight();
                }
            }
        } else{
            if(rightChild != null)
                insert(data, rightChild);
            else{
                node.setRightChild(new Node<>(data, node));
                if(leftChild == null){
                    node.updateHeight();
                }
            }
        }
    }

    @Override
    public void remove(T data) {
        if(root != null){
            remove(data, root);
        }
    }
    private void remove(T data, Node<T> node) {
        if(node != null){
            Node<T> leftChild = node.getLeftChild();
            Node<T> rightChild = node.getRightChild();

            if(data.compareTo(node.getData()) < 0){
                remove(data, leftChild);
            } else if(data.compareTo(node.getData()) > 0) {
                remove(data, rightChild);
            }else{
                //Remove leaf node
                if(leftChild == null && rightChild == null){
                    Node<T> parent = node.getParent();
                    if(parent != null){
                        if(parent.getLeftChild() == node){
                            parent.setLeftChild(null);
                            if(parent.getRightChild() == null){
                                parent.decreaseHeight();
                                parent.getParent().updateHeight();
                            }
                        } else{
                            parent.setRightChild(null);
                            if(parent.getLeftChild() == null){
                                parent.decreaseHeight();
                                parent.getParent().updateHeight();
                            }
                        }
                    } else {
                        this.root = null;
                    }
                //If the node has one child only
                } else if(leftChild == null && rightChild != null){
                    Node<T> parent = node.getParent();
                    if(parent != null){
                        if(parent.getLeftChild() == node){
                            parent.setLeftChild(rightChild);
                        } else{
                            parent.setRightChild(rightChild);
                        }
                        parent.decreaseHeight();
                        parent.getParent().updateHeight();
                    } else{
                        this.root = rightChild;
                    }
                    rightChild.setParent(parent);
                    rightChild.setDepth(rightChild.getDepth()-1);
                    node = null;
                } else if(leftChild != null && rightChild == null){
                    Node<T> parent = node.getParent();
                    if(parent != null){
                        if(parent.getLeftChild() == node){
                            parent.setLeftChild(leftChild);
                        } else{
                            parent.setRightChild(leftChild);
                        }
                        parent.decreaseHeight();
                        parent.getParent().updateHeight();
                    } else{
                        this.root = leftChild;
                    }
                    leftChild.setParent(parent);
                    leftChild.setDepth(leftChild.getDepth()-1);
                    node = null;
                }
                //If node has both children
                else{
                    Node<T> maxNodeInLeftSubTree = getMax(leftChild);
                    T maxNodeData = maxNodeInLeftSubTree.getData();
                    node.setData(maxNodeData);
                    remove(maxNodeData, maxNodeInLeftSubTree);
                }
            }
        }
    }

    @Override
    public void traverse() {
        if(root != null)
            traverse(root);
    }
    private void traverse(Node<T> node) {
        if(node != null){
            Node<T> leftChild = node.getLeftChild();
            Node<T> rightChild = node.getRightChild();

            if(leftChild != null)
                traverse(leftChild);

            System.out.println(node + ", height " + node.getHeight() + ", depth " + node.getDepth());

            if(rightChild != null)
                traverse(rightChild);
        }
    }

    @Override
    public Node<T> search(T data){
        return search(root, data);
    }
    private Node<T> search(Node<T> node, T data){
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

    @Override
    public Node<T> getMin() {
        if(root == null){
            return null;
        } else{
            return getMin(root);
        }
    }
    private Node<T> getMin(Node<T> node) {
        Node<T> leftChild = node.getLeftChild();
        if(leftChild == null){
            return node;
        } else{
            return getMin(leftChild);
        }
    }

    @Override
    public Node<T> getMax() {
        if(root == null){
            return null;
        } else{
            return getMax(root);
        }
    }
    private Node<T> getMax(Node<T> node) {
        Node<T> rightChild = node.getRightChild();
        if(rightChild == null){
            return node;
        } else{
            return getMax(rightChild);
        }
    }

    public Node<T> getRoot() {
        return root;
    }
}
