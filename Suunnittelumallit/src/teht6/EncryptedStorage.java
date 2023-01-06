package teht6;

public class EncryptedStorage implements Storage{
    private Storage storage;

    private final String secret = "Super safe secret";

    public EncryptedStorage(Storage storage) {
        this.storage = storage;
    }

    @Override
    public void saveData(String content) {
        storage.saveData(AES.encrypt(content, secret));
    }

    @Override
    public String readData() {
        String data = storage.readData();
        return AES.decrypt(data, secret);
    }
}
