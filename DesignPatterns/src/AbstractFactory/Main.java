package AbstractFactory;

import AbstractFactory.book.Notebook;
import AbstractFactory.book.ReadingBook;
import AbstractFactory.bookuser.BookUser;
import AbstractFactory.bookuser.Writer;
import AbstractFactory.factory.BookFactory;
import AbstractFactory.factory.NotebookFactory;
import AbstractFactory.factory.ReadingBookFactory;

public class Main {
    public static void main(String[] args) {
        BookFactory notebookFactory = new NotebookFactory();
        BookFactory readingBookFactory = new ReadingBookFactory();

        Notebook notebook = (Notebook) notebookFactory.createBook();
        ReadingBook readingBook = (ReadingBook) readingBookFactory.createBook();
        readingBook.setContent("This is just a reading book bla bla bla");

        Writer writer = (Writer) notebookFactory.createBookUser();
        BookUser reader = readingBookFactory.createBookUser();

        writer.setBook(notebook);
        reader.setBook(readingBook);

        writer.writeContent("new text");

        notebook.displayContent();
        readingBook.displayContent();
    }
}
