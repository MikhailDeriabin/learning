package AbstractFactory.factory;

import AbstractFactory.book.Book;
import AbstractFactory.book.Notebook;
import AbstractFactory.bookuser.BookUser;
import AbstractFactory.bookuser.Writer;

public class NotebookFactory implements BookFactory{

    @Override
    public Book createBook() {
        return new Notebook();
    }

    @Override
    public BookUser createBookUser() {
        return new Writer();
    }
}
