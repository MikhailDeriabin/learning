package AbstractFactory.factory;

import AbstractFactory.book.Book;
import AbstractFactory.book.ReadingBook;
import AbstractFactory.bookuser.BookUser;
import AbstractFactory.bookuser.Reader;

public class ReadingBookFactory implements BookFactory{

    @Override
    public Book createBook() {
        return new ReadingBook();
    }

    @Override
    public BookUser createBookUser() {
        return new Reader();
    }
}
