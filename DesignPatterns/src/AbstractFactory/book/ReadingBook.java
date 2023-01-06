package AbstractFactory.book;

public class ReadingBook implements Book{
    private String content;

    @Override
    public String getContent() {
        return content;
    }

    @Override
    public void displayContent() {
        System.out.println(content);
    }

    @Override
    public void setContent(String content) {
        this.content = content;
    }
}
