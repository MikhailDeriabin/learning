package org.patterns.patterns.proxy;

/**
 * Actual object. Notice that its creation is a slow operation
 *  and should happen only when it is really necessary
 */
public class BitmapImage implements IImage {

    public BitmapImage(String fileName) {
        this.fileName = fileName;
        System.out.println("Reading image from hard disk...");
    }

    private Point location;
    private String fileName;

    @Override
    public void setLocation(Point point) {
        this.location = point;
    }

    @Override
    public Point getLocation() {
        return this.location;
    }

    @Override
    public void render() {
        System.out.println("Rendering actual image...\n" + "Location: " + this.location);
    }
}
