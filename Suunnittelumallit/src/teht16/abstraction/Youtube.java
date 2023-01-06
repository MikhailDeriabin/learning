package teht16.abstraction;

import teht16.implementator.ILoader;

public class Youtube implements Hosting{
    private final ILoader loader;

    public Youtube(ILoader loader) {
        this.loader = loader;
    }

    @Override
    public void loadPage() {
        loader.loadHTML();
        loader.loadVideos();
        loader.loadPhotos();
        loader.loadText();
        loader.loadUserData();
    }
}
