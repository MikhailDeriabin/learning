package datastructure.Tree.tree;

public class Main {
    public static void main(String[] args) {
        //root elem
        Node<String> root = new Node<>("Drinks");

        //second level
        Node<String> hotDrinks = new Node<>("Hot drinks");
        Node<String> coldDrinks = new Node<>("Cold drinks");

        //third level
        Node<String> tea = new Node<>("Tea");
        Node<String> coffee = new Node<>("Coffee");
        Node<String> cola = new Node<>("Cola");
        Node<String> beer = new Node<>("Beer");

        //add elements to categories = create tree

        //second level
        root.addChild(hotDrinks);
        root.addChild(coldDrinks);

        //third level: hot drinks
        hotDrinks.addChild(tea);
        hotDrinks.addChild(coffee);

        //third level: cold drinks
        coldDrinks.addChild(cola);
        coldDrinks.addChild(beer);


        System.out.println(root.print(0));
    }
}
