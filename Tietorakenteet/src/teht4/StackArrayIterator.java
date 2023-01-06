package teht4;

public class StackArrayIterator<T> implements Iterator<T>{
    private T currentElement;
    private int currentElementIndex;
    private final StackArray<T> container;

    StackArrayIterator(StackArray<T> stackArray){
        container = stackArray;
        currentElement = container.peek();
        currentElementIndex = stackArray.size()-1;
    }

    @Override
    public boolean hasNext() {
        return currentElement != null && container.size() > 0;
    }

    @Override
    public T next() {
        T oldCurrentElement = currentElement;
        if(currentElementIndex > 0){
            currentElementIndex--;
            currentElement = container.getNodes()[currentElementIndex];
        } else {
            currentElement = null;
        }

        return oldCurrentElement;
    }
}
