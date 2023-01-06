package datastructure.HashTable;

import datastructure.HashTable.chainig.HashTableChaining;
import datastructure.HashTable.chainig.NodeChaining;
import datastructure.HashTable.linearProbing.HashTableLinear;
import datastructure.HashTable.linearProbing.NodeLinear;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int elemCount = 10;
        int hashTableSize = 10;
        String[] data = {
            "Apple", "Apple", "Orange", "Kiwi", "Banana", "Clementine", "Pear", "Grapefruit",
            "Mandarin", "Lime", "Nectarine", "Apricot", "Peach", "Plum", "Mango",
            "Strawberry", "Raspberry", "Blueberry", "Passion fruit", "Watermelon",
            "Rock melon", "Melon", "Tomato", "Avocado"
        };

        HashTableLinear<Integer, String> hashTableInt = generateHashTableInteger(elemCount, hashTableSize, data);

        printHashTableLinear(hashTableInt);
        System.out.println("Collisions happen: " + hashTableInt.getCollisionCount());
        System.out.println("Resizes happen: " + hashTableInt.getResizeCount());

        hashTableInt.remove(0);
        hashTableInt.remove(3);
        printHashTableLinear(hashTableInt);
    }

    public static HashTableLinear<Integer, String> generateHashTableInteger(int elemCount, int size, String[] dataSet){
        Random random = new Random();
        HashTableLinear<Integer, String> result = new HashTableLinear<>(size);
        for(int i=0; i<elemCount; i++){
            String value = dataSet[random.nextInt(dataSet.length)];
            result.add(i, value);
        }

        return result;
    }

    public static HashTableLinear<String, Integer> generateHashTableString(int elemCount, int size, String[] dataSet){
        Random random = new Random();
        HashTableLinear<String, Integer> result = new HashTableLinear<>(size);
        for(int i=0; i<elemCount; i++){
            String value = dataSet[random.nextInt(dataSet.length)];
            result.add(value, i);
        }

        return result;
    }

    public static void printHashTableLinear(HashTableLinear hashTable){
        NodeLinear[] nodes = hashTable.getTable();
        for(int i=0; i< nodes.length; i++){
            System.out.println(nodes[i]);
        }
    }

    public static void printHashTableChainingInt(HashTableChaining<Integer, String> hashTable){
        NodeChaining<Integer, String>[] content = hashTable.getTable();
        for(int i=0; i< content.length; i++){
            String result = null;

            if(content[i] != null){
                result = content[i].toString();
                NodeChaining<Integer, String> nextNode = content[i].getNextNode();
                while(nextNode != null){
                    result += " - " + nextNode;
                    nextNode = nextNode.getNextNode();
                }
            }

            System.out.println(result);
        }
    }

    public static void printHashTableChainingStr(HashTableChaining<String, Integer> hashTable){
        NodeChaining<String, Integer>[] content = hashTable.getTable();
        for(int i=0; i< content.length; i++){
            if(content[i] != null){
                String result = content[i].toString();
                NodeChaining<String, Integer> nextNode = content[i].getNextNode();
                while(nextNode != null){
                    result += " - " + nextNode;
                    nextNode = nextNode.getNextNode();
                }
                System.out.println(result);
            }
        }
    }
}
