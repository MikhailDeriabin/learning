package AbstractFactory.bookuser;

import AbstractFactory.book.Book;

public interface BookUser {
    Book getBook();
    void setBook(Book book);
    String getName();
    void setName(String name);
}
