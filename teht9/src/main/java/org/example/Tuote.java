package org.example;

public class Tuote {
	
    private float hinta;

    private String nimi;

    public Tuote(String nimi, float hinta) {
        this.nimi = nimi;
        this.hinta = hinta;
    }

    public String getNimi() {
        return nimi;
    }

    public float getHinta() {
        return hinta;
    }

}
