package teht17;

import java.util.Comparator;
import java.util.TreeSet;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: </p>
 *
 * <p>Company: Stadia</p>
 *
 * @author JPK
 * @version 1.0
 */
public class Menu {
    //main alkaa-----------------------------------------------------------------------------
    public static void main(String[] args) {

        printMenu();

    }
    //main loppuu --------------------------------------------------------------------------
//printMenu alkaa------------------------------------------------------------------
    private static void printMenu() {
        char select;
        TreeSet<Integer> tree = new TreeSet<>(); // pino-olio
        String data; // Pinon data-kenttä
        do {

            System.out.println("\n\t\t\t1. Alkion lisääminen.");
            System.out.println("\t\t\t2. Alkion poistaminen.");
            System.out.println("\t\t\t3. Puun sisältö.");
            System.out.println("\t\t\t4. Alkioiden lukumäärä.");
            System.out.println("\t\t\t5. Etsintä.");
            System.out.println("\t\t\t7. lopetus ");
            System.out.print("\n\n"); // tehdään tyhjiä rivejä
            select = Lue.merkki();
            switch (select) {
                case '1':
                    System.out.println("Anna alkion sisältö (merkkijono)");
                    data = new String(Lue.rivi());
                    tree.add(Integer.parseInt(data));
                    break;
                case '2':
                    System.out.println("Anna alkion sisältö (merkkijono)");
                    data = new String(Lue.rivi());
                    tree.remove(Integer.parseInt(data));
                    if (tree.size() <= 0)
                        System.out.println("Pino on tyhjä");
                    else
                        System.out.println("Poistettu alkio: "+data);
                    break;
                case '3':
                    for(Integer num : tree)
                        System.out.println(num);
                    break;
                case '4':
                    System.out.println("Lukumäärä = "+tree.size());
                    break;
                case '5':
                    System.out.println("Anna alkion sisältö (merkkijono)");
                    data = new String(Lue.rivi());
                    boolean result = tree.contains(Integer.parseInt(data));
                    if(result)
                        System.out.println("Alkio löydetty");
                    else
                        System.out.println("Alkio ei ole löydetty");
                    break;
                case '7':
                    break;
            }
        }
        while (select != '7');
    }

}
