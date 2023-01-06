package teht2.clothes;

public class LippisAdidas implements Lippis{
	private String wearName = "lippis(adidas)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}
}
