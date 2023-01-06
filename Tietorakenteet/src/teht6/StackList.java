package teht6;

import java.util.LinkedList;
import java.util.ListIterator;

public class StackList<T> implements Stack<T>{
    private final LinkedList<T> list;
    public StackList(){
        list = new LinkedList<>();
    }

    public ListIterator<T> iterator(){
        return list.listIterator();
    }

    @Override
    public void push(T node){
        list.push(node);
    }

    @Override
    public T pop() {
        return list.pop();
    }

    @Override
    public T peek() {
        return list.peek();
    }

    @Override
    public int size() {
        return list.size();
    }
}
