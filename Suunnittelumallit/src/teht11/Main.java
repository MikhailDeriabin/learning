package teht11;

public class Main {
    public static void main(String[] args) {
        int maxRandNum = 100;
        Arvuuttaja arvuuttaja = new Arvuuttaja(maxRandNum);
        ArvuuttajaCareTaker arvuuttajaCareTaker = new ArvuuttajaCareTaker(arvuuttaja);

        Pelaaja p1 = new Pelaaja("John", maxRandNum, arvuuttajaCareTaker);
        Pelaaja p2 = new Pelaaja("George", maxRandNum, arvuuttajaCareTaker);
        Pelaaja p3 = new Pelaaja("Mark", maxRandNum, arvuuttajaCareTaker);
        Pelaaja p4 = new Pelaaja("Leo", maxRandNum, arvuuttajaCareTaker);

        p1.start();
        p2.start();
        p3.start();
        p4.start();
    }
}
