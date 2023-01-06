package org.example;

import java.util.concurrent.ThreadLocalRandom;

/**
 * The class represents Player bot in the game.
 */
public class Pelaaja {

    /**
     * Given player wins count.
     */
    private int voitot;
    /**
     * Name of the player, should be unique.
     */
    private final String pelaajanNimi;

    /**
     * Constructor, which set player name.
     * @param pelaajanNimi name to be set.
     */
    public Pelaaja(String pelaajanNimi){
        this.pelaajanNimi = pelaajanNimi;
    }

    /**
     * Generates random Valinta-object.
     * Used each round during the game.
     * @return random Valinta-object, which represents player's move.
     */
    public Valinta pelaajanValinta() {
        ValintaVaihtoehto[] valintaVaihtoehdot = { ValintaVaihtoehto.KIVI, ValintaVaihtoehto.SAKSET, ValintaVaihtoehto.PAPERI };
        int randIndex = ThreadLocalRandom.current().nextInt(0, 3);
        return new Valinta(valintaVaihtoehdot[randIndex]);
    }

    /**
     * Increases amount of the given player wins.
     * Should be used in case of the player win.
     */
    public void lisaaVoitto() {
        voitot++;
    }

    /**
     * Getter for voitot field, which represents wins count.
     * @return wins count.
     */
    public int getVoitot() {
        return voitot;
    }

    @Override
    public String toString(){ return pelaajanNimi; }
}
