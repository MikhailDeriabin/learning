package teht2.clothes;

public class FarmaritAdidas implements Farmarit{
	private String wearName = "farmarit(adidas)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}

}
