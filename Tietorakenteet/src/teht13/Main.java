package teht13;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int elemCount = 7;
        int hashTableSize = 5;
        String[] data = {
            "Apple", "Orange", "Kiwi", "Banana", "Clementine", "Pear", "Grapefruit",
            "Mandarin", "Lime", "Nectarine", "Apricot", "Peach", "Plum", "Mango",
            "Strawberry", "Raspberry", "Blueberry", "Passion fruit", "Watermelon",
            "Rock melon", "Melon", "Tomato", "Avocado"
        };

        System.out.println("-------------- Generate table with random values and check, that resizing works (> 75% full) -----------------");
        HashTableLinear<Integer, String> hashTableInt = generateHashTableInteger(elemCount, hashTableSize, data);
        printHashTableLinear(hashTableInt);
        System.out.println("-------------- Conclusion -----------------");
        System.out.println("Collisions happen: " + hashTableInt.getCollisionCount());
        System.out.println("Resizes happen: " + hashTableInt.getResizeCount());

        System.out.println("\n-------------------------------\n");

        HashTableLinear<String, Integer> hashTable = new HashTableLinear<>(6);
        String item1 = data[0];
        String item2 = data[1];
        String item3 = data[2];
        System.out.println("-------------- Add items(" + item1 + " 11, " + item2 + " 22, " + item3 + " 33) -----------------");
        hashTable.add(item1, 11);
        hashTable.add(item2, 22);
        hashTable.add(item3, 33);
        printHashTableLinear(hashTable);

        System.out.println("-------------- Remove item " + item2 + " 22 -----------------");
        hashTable.remove(item2);
        printHashTableLinear(hashTable);

        System.out.println("-------------- Search for item " + item1 + " 11 -----------------");
        System.out.println("Search result " + hashTable.search(item1));

        System.out.println("-------------- Search for not existing item " + item2 + " 22 -----------------");
        System.out.println("Search result " + hashTable.search(item2));

        System.out.println("-------------- Try add item " + item1 + " 11, which key is already added -----------------");
        hashTable.add(item1, 11);

        System.out.println("-------------- Conclusion -----------------");
        System.out.println("Collisions happen: " + hashTable.getCollisionCount());
        System.out.println("Resizes happen: " + hashTable.getResizeCount());
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
}
