package AbstractFactory.factory;

import AbstractFactory.book.Book;
import AbstractFactory.bookuser.BookUser;

public interface BookFactory {
    Book createBook();
    BookUser createBookUser();
}
