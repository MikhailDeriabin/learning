package org.patterns.patterns.proxy;

/**
 * Delegating creation of object to factory, 
 * so that client code does not think about should it create actual object or proxy
 */
public class ImageFactory {
    IImage getImage(String fileName){
        return new ImageProxy(fileName);
    }
}
