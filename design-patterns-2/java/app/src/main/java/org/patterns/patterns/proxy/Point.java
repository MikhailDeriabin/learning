package org.patterns.patterns.proxy;

public class Point {
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    private final int x, y;

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }

    @Override
    public String toString() {
        return "x: " + x + ", y: " + y;
    }
}
