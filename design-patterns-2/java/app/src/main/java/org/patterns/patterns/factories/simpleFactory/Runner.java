package org.patterns.patterns.factories.simpleFactory;

import org.patterns.patterns.IRunner;

public class Runner implements IRunner{
    @Override
    public void run(int exampleNum) {
        Post blogPost = PostFactory.create("blog");
        System.out.println("blogPost " + blogPost);

        Post newsPost = PostFactory.create("news");
        System.out.println("newsPost " + newsPost);
    }
}
