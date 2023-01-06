package teht2.clothes;

public class TPaitaBoss implements TPaita{
	private String wearName = "tpaita(boss)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}
}
