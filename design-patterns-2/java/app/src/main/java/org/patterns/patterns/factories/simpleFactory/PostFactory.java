package org.patterns.patterns.factories.simpleFactory;

/**
 * This class is a simple factory for creating different posts.
 * 
 * Notice that not everyone think that this is a design pattern.
 */
public class PostFactory {
    public static Post create(String type) throws IllegalArgumentException {
        switch (type) {
            case "blog":
                return new BlogPost();
            case "news":
                return new NewsPost();
            case "product":
                return new ProductPost();
            default:
                throw new IllegalArgumentException("Uknown post type");
        }
    }
}
