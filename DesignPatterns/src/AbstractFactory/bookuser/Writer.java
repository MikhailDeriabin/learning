package AbstractFactory.bookuser;

import AbstractFactory.book.Book;
import AbstractFactory.book.Notebook;

public class Writer implements BookUser{
    private String name;
    private Notebook book;

    public Writer(){
        name = "notebook user";
    }

    public void writeContent(String content) {
        System.out.println(name + " is writing...");
        book.addContent(content);
    }

    @Override
    public String getName() {
        return name;
    }
    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Book getBook() {
        return book;
    }
    @Override
    public void setBook(Book book) {
        this.book = (Notebook) book;
    }
}
