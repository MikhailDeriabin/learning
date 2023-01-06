package teht6;

public class Main {
    public static void main(String[] args) {

        Storage basicStorage = new BasicStorage();
        basicStorage.saveData("Some content");
        String data1 = basicStorage.readData();
        System.out.println("Read data: " + data1);

        System.out.println("------------------------------------------");

        EncryptedStorage enStorage = new EncryptedStorage(basicStorage);
        enStorage.saveData("Some content");
        String data2 = enStorage.readData();
        System.out.println("Read data: " + data2);
    }
}
