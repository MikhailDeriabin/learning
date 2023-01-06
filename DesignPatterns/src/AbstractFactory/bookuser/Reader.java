package AbstractFactory.bookuser;

import AbstractFactory.book.Book;
import AbstractFactory.book.ReadingBook;

public class Reader implements BookUser{

    public String name;
    public ReadingBook book;

    public Reader(){
        name = "book reader";
    }

    public void readContent(String content) {
        System.out.println(name + " is reading: ");
        System.out.println(content);
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

    public void setBook(Book book) {
        this.book = (ReadingBook) book;
    }
}
