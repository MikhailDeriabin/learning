package teht16.implementator;

public class Loader implements ILoader{
    @Override
    public void loadHTML() {
        System.out.println("Loading HTML...");
        System.out.println("HTML loaded successfully!");
    }

    @Override
    public void loadPhotos() {
        System.out.println("Loading photos...");
        System.out.println("Photos loaded successfully!");
    }

    @Override
    public void loadVideos() {
        System.out.println("Loading videos...");
        System.out.println("Videos loaded successfully!");
    }

    @Override
    public void loadUserData() {
        System.out.println("Loading user data...");
        System.out.println("User data loaded successfully!");
    }

    @Override
    public void loadText() {
        System.out.println("Loading text...");
        System.out.println("Text data loaded successfully!");
    }
}
