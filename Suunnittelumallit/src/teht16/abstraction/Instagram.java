package teht16.abstraction;

import teht16.implementator.ILoader;

public class Instagram implements Hosting{
    private final ILoader loader;

    public Instagram(ILoader loader) {
        this.loader = loader;
    }

    @Override
    public void loadPage() {
        loader.loadHTML();
        loader.loadPhotos();
        loader.loadUserData();
        loader.loadVideos();
        loader.loadText();
    }
}
