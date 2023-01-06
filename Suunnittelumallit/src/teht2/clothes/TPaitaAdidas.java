package teht2.clothes;

public class TPaitaAdidas implements TPaita{
	private String wearName = "tpaita(adidas)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}
	
}
