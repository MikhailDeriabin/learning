package teht16.abstraction;

import teht16.implementator.ILoader;

public class Wikipedia implements Hosting{
    private final ILoader loader;

    public Wikipedia(ILoader loader) {
        this.loader = loader;
    }

    @Override
    public void loadPage() {
        loader.loadHTML();
        loader.loadText();
        loader.loadPhotos();
        loader.loadVideos();
        loader.loadUserData();
    }
}
