package org.example;

/**
 * Main class, which runs the program.
 */
public class Main {
    /**
     * Peli-object, which is used for running the program.
     */
    public static Peli peli = new Peli("Pelaaja 1", "Pelaaja 2");

    public static void main(String[] args) {
        while (!peli.isPeliLoppui()) {
            peli.pelaaKierros();
        }
    }
}
