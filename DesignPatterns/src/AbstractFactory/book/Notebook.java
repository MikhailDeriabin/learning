package AbstractFactory.book;

public class Notebook implements Book{
    private String content = "";

    public void addContent(String newContent){
        content += "\n" + newContent;
    }

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
