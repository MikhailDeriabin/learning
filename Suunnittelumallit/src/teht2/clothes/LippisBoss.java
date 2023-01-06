package teht2.clothes;

public class LippisBoss implements Lippis{
	private String wearName = "lippis(boss)";

	@Override
	public void printName() {
		System.out.println(wearName);
	}
	
	@Override
	public String toString() {
		return wearName;
	}
}
