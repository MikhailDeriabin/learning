package datastructure.Lists;

import datastructure.Lists.DoublyLinkedList.DoublyLinkedList;

public class Main {
    public static void main(String[] args) {
        DoublyLinkedList<String> list = new DoublyLinkedList<>();

        list.add("1 elem");
        list.add("2 elem");
        list.add("3 elem");
        list.add("4 elem");

        list.remove("4 elem");

        System.out.println(list.getFirstNode());
        System.out.println(list.getLastNode());
        System.out.println(list.size());

    }
}
