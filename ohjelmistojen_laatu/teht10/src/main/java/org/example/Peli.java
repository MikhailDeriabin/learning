package org.example;

/**
 * The class represents game and contains methods for managing game process.
 */
public class Peli {

    /**
     * Players of the game.
     */
    private final Pelaaja p1, p2;
    /**
     * Indicates whenever the game has been ended or not.
     */
    private boolean peliLoppui = false;

    /**
     * Amount of all played rounds.
     */
    private int pelatutPelit = 0;
    /**
     * Amount of all draws.
     */
    private int tasapelit = 0;

    /**
     * Constructor, which creates player bots for the game.
     * @param p1Nimi first Player-object name, should be unique.
     * @param p2Nimi second Player-object name, should be unique.
     */
    public Peli(String p1Nimi, String p2Nimi){
        p1 = new Pelaaja(p1Nimi);
        p2 = new Pelaaja(p2Nimi);
    }

    /**
     * Represents one round of the game.
     * In case then one of the two Players win 3 rounds, the method will stop the game.
     */
    public void pelaaKierros(){
        Pelaaja voittaja = null;
        Valinta p1Valinta = p1.pelaajanValinta();
        Valinta p2Valinta = p2.pelaajanValinta();
        tulostaKierrosInfo(p1Valinta, p2Valinta);

        if (p1Valinta.isGreater(p2Valinta))
            voittaja = p1;
        else if (p1Valinta.isLess(p2Valinta))
            voittaja = p2;

        if (voittaja == null) {
            tasapelit++;
            System.out.println("\n\t\t\t Tasapeli \n");
        } else {
            voittaja.lisaaVoitto();
            System.out.println(voittaja + " voittaa");
        }

        pelatutPelit++;

        if (p1.getVoitot()>=3 || p2.getVoitot()>=3)
            lopetaPeli(voittaja);

        System.out.println();
    }

    /**
     * Print game stats for each round.
     * @param valinta1 first Player Valinta-object or move for the round.
     * @param valinta2 second Player Valinta-object or move for the round.
     */
    public void tulostaKierrosInfo(Valinta valinta1, Valinta valinta2){
        System.out.println("Erä: " + pelatutPelit + " =====================\n");
        System.out.println("Tasapelien lukumäärä: " + tasapelit + "\n");
        System.out.println(p1 + ": " + valinta1 + "\n\t" + p1 + ":llä koossa " + p1.getVoitot() + " voittoa.");
        System.out.println(p2 + ": " + valinta2 + "\n\t" + p2 + ":llä koossa " + p2.getVoitot() + " voittoa.");
    }

    /**
     * Finish the game.
     * Set peliLoppui to true and print the game result.
     * @param voittaja winner of the game.
     */
    public void lopetaPeli(Pelaaja voittaja){
        setPeliLoppui(true);
        System.out.println("KOLME VOITTOA - PELI PÄÄTTYY");
        System.out.println("Voittaja: " + voittaja);
    }

    /**
     * Getter for peliLoppui field.
     * @return peliLoppui field.
     */
    public boolean isPeliLoppui() { return peliLoppui; }

    /**
     * Setter for peliLoppui field.
     * @param peliLoppui value to be set.
     */
    public void setPeliLoppui(boolean peliLoppui) { this.peliLoppui = peliLoppui; }
}
