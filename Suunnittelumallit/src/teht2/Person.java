package teht2;

import teht2.clothes.Farmarit;
import teht2.clothes.Kengat;
import teht2.clothes.Lippis;
import teht2.clothes.TPaita;

public class Person {
	private String name;
	private Farmarit farmarit;
	private Kengat kengat;
	private Lippis lippis;
	private TPaita tpaita;
	
	public Person(String name, Farmarit farmarit, Kengat kengat, Lippis lippis, TPaita tpaita) {
		this.name = name;
		this.farmarit = farmarit;
		this.kengat = kengat;
		this.lippis = lippis;
		this.tpaita = tpaita;
	}
	
	public void printAllClothes() {
		System.out.println(name + " vaatteet:");
		if(farmarit != null)
			farmarit.printName();
		if(kengat != null)
			kengat.printName();
		if(lippis != null)
			lippis.printName();
		if(tpaita != null)
			tpaita.printName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Farmarit getFarmarit() {
		return farmarit;
	}

	public void setFarmarit(Farmarit farmarit) {
		this.farmarit = farmarit;
	}

	public Kengat getKengat() {
		return kengat;
	}

	public void setKengat(Kengat kengat) {
		this.kengat = kengat;
	}

	public Lippis getLippis() {
		return lippis;
	}

	public void setLippis(Lippis lippis) {
		this.lippis = lippis;
	}

	public TPaita getTpaita() {
		return tpaita;
	}

	public void setTpaita(TPaita tpaita) {
		this.tpaita = tpaita;
	}		
}
