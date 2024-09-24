package org.patterns.patterns.proxy;

/**
 * Common interface for actual object and its proxy
 */
public interface IImage {
    void setLocation(Point point);
    Point getLocation();
    void render();
}
