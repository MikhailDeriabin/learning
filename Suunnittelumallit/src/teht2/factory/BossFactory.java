package teht2.factory;

import teht2.clothes.Farmarit;
import teht2.clothes.FarmaritBoss;
import teht2.clothes.Kengat;
import teht2.clothes.KengatBoss;
import teht2.clothes.Lippis;
import teht2.clothes.LippisBoss;
import teht2.clothes.TPaita;
import teht2.clothes.TPaitaBoss;

public class BossFactory implements ClothesFactory{

	@Override
	public Farmarit createFarmarit() {
		return new FarmaritBoss();
	}

	@Override
	public Kengat createKengat() {
		return new KengatBoss();
	}

	@Override
	public Lippis createLippis() {
		return new LippisBoss();
	}

	@Override
	public TPaita createTPaita() {
		return new TPaitaBoss();
	}

}
