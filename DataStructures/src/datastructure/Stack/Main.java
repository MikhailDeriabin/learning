package datastructure.Stack;

public class Main {
    public static void main(String[] args) {
        StackArray<String> stack = new StackArray<String>();

        stack.push("1 elem");
        stack.push("2 elem");
        stack.push("3 elem");
        stack.push("4 elem");

        System.out.println("Size: " + stack.size());
        System.out.println(stack.pop());
        System.out.println("--------------");
        stack.printAllNodes();
        System.out.println("Size: " + stack.size());
    }
}
