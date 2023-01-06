package teht4;

public class Main {
    public static void main(String[] args) {
        StackArray<String> stack = new StackArray<String>();

        stack.push("1 elem");
        stack.push("2 elem");
        stack.push("3 elem");
        stack.push("4 elem");

        StackArrayIterator<String> iterator = stack.iterator();
        while(iterator.hasNext()){
            System.out.println(stack.pop());
        }
    }
}
