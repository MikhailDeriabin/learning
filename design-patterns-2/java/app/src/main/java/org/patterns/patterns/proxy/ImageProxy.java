package org.patterns.patterns.proxy;

/**
 * Proxy object that allows us to delay actual image creation as long as possible, 
 * so that we can set different properties or do any other operations before its creation.
 * That way we can save some memory or even save same CPU resources (in case user did cancel Image rendering)
 */
public class ImageProxy implements IImage {

    public ImageProxy(String fileName) {
        this.fileName = fileName;
    }

    private BitmapImage actualImage;
    private String fileName;
    private Point location;

    @Override
    public void setLocation(Point point) {
        if (this.actualImage != null) {
            this.actualImage.setLocation(point);
            return;
        }

        this.location = point;
    }

    @Override
    public Point getLocation() {
        if (this.actualImage != null)
            return this.actualImage.getLocation();

        return this.location;
    }

    @Override
    public void render() {
        if (this.actualImage == null) {
            this.actualImage = new BitmapImage(fileName);
            actualImage.setLocation(this.location);
        }

        actualImage.render();
    }
}
