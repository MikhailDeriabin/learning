package teht1;

import teht1.aterioiva.AterioivaOtus;
import teht1.aterioiva.Ohjelmoija;
import teht1.aterioiva.Opettaja;
import teht1.aterioiva.Opiskelija;

public class Main {

    public static void main(String[] args) {
        AterioivaOtus opettaja = new Opettaja();
        System.out.println(opettaja);
        opettaja.aterioi();

        System.out.println("----------------------");

        AterioivaOtus opiskelija = new Opiskelija();
        System.out.println(opiskelija);
        opiskelija.aterioi();

        System.out.println("----------------------");

        AterioivaOtus ohjelmoija = new Ohjelmoija();
        System.out.println(ohjelmoija);
        ohjelmoija.aterioi();
    }
}
