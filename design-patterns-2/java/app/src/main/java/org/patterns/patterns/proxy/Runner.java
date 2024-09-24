package org.patterns.patterns.proxy;

import org.patterns.patterns.IRunner;

public class Runner implements IRunner {
    @Override
    public void run(int exampleNum) {
        //Setting some properties 
        Point location = new Point(2, 3);
        ImageFactory factory = new ImageFactory();
        IImage image = factory.getImage("my-img.png");
        image.setLocation(location);

        //Only here we render the image
        image.render();
    }
}
