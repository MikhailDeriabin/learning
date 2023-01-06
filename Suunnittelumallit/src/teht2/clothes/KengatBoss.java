package teht2.clothes;

public class KengatBoss implements Kengat{
	private String wearName = "kengat(boss)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}
}
