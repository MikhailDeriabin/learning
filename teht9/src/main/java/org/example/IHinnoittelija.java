package org.example;

public interface IHinnoittelija {
	float getAlennusProsentti(Asiakas asiakas, Tuote tuote);
	void aloita();
	void setAlennusProsentti(Asiakas asiakas, float prosentti);
	void lopeta();
}
