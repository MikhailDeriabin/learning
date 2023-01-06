package teht6;

public class BasicStorage implements Storage{
    private String content;

    @Override
    public void saveData(String content) {
        this.content = content;
        System.out.println("Saved data: " + this.content);
    }

    @Override
    public String readData() {
        return content;
    }
}
