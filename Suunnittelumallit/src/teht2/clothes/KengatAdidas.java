package teht2.clothes;

public class KengatAdidas implements Kengat{
	private String wearName = "kengat(adidas)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}
}
