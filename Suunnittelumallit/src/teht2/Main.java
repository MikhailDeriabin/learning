package teht2;

import teht2.clothes.Farmarit;
import teht2.clothes.Kengat;
import teht2.clothes.Lippis;
import teht2.clothes.TPaita;
import teht2.factory.AdidasFactory;
import teht2.factory.BossFactory;
import teht2.factory.ClothesFactory;

public class Main {
	public static void main(String[] args) {
		Person jasperOpiskelija = generatePerson("Jasper opiskelija", new AdidasFactory());
		Person jasperTyöntekija = generatePerson("Jasper työntekijä", new BossFactory());
		
		jasperOpiskelija.printAllClothes();
		System.out.println("------------------------");
		jasperTyöntekija.printAllClothes();
	}
	
	public static Person generatePerson(String name, ClothesFactory clothesFactory) {
		Farmarit farmarit = clothesFactory.createFarmarit();
		Kengat kengat = clothesFactory.createKengat();
		Lippis lippis = clothesFactory.createLippis();
		TPaita tpaita = clothesFactory.createTPaita();
		
		return new Person(name, farmarit, kengat, lippis, tpaita);
	}
}
