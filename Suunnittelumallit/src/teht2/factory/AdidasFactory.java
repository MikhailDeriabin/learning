package teht2.factory;

import teht2.clothes.Farmarit;
import teht2.clothes.FarmaritAdidas;
import teht2.clothes.Kengat;
import teht2.clothes.KengatAdidas;
import teht2.clothes.Lippis;
import teht2.clothes.LippisAdidas;
import teht2.clothes.TPaita;
import teht2.clothes.TPaitaAdidas;

public class AdidasFactory implements ClothesFactory{
	@Override
	public Farmarit createFarmarit() {
		return new FarmaritAdidas();
	}

	@Override
	public Kengat createKengat() {
		return new KengatAdidas();
	}

	@Override
	public Lippis createLippis() {
		return new LippisAdidas();
	}

	@Override
	public TPaita createTPaita() {
		return new TPaitaAdidas();
	}
}
