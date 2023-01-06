package teht2.factory;

import teht2.clothes.Farmarit;
import teht2.clothes.Kengat;
import teht2.clothes.Lippis;
import teht2.clothes.TPaita;

public interface ClothesFactory {
	Farmarit createFarmarit();
	Kengat createKengat();
	Lippis createLippis();
	TPaita createTPaita();
}
