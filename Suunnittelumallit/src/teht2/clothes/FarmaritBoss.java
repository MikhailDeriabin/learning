package teht2.clothes;

public class FarmaritBoss implements Farmarit{
	private String wearName = "farmarit(boss)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}

}
