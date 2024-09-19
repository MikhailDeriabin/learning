package org.patterns.patterns.composite;

/**
 * Leaf node in composite pattern.
 * Leaf has the most basic operations
 */ 
public class BinaryFile extends File{

    public BinaryFile(String name) {
        super(name);
    }

    @Override
    public void ls() {
        System.out.println(this.getIntendString() + "-" + this.getName());
    }

    @Override
    public void addFile(File file) {
        throw new UnsupportedOperationException("Unimplemented method 'addFile'");
    }

    @Override
    public File[] getFiles() {
        throw new UnsupportedOperationException("Unimplemented method 'getFiles'");
    }

    @Override
    public boolean removeFile(File file) {
        throw new UnsupportedOperationException("Unimplemented method 'removeFile'");
    }
}
