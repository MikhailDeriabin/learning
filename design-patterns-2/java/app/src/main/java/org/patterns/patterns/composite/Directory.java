package org.patterns.patterns.composite;

import java.util.ArrayList;

/**
 * Composite in the composite pattern
 * That means it contains leaves or other composite objects inside of it (files list)
 */ 
public class Directory extends File{

    public Directory(String name) {
        super(name);
        files = new ArrayList<File>();
    }

    private ArrayList<File> files; 

    @Override
    public void ls() {
        System.out.println(this.getIntendString() + "/" + this.getName());
        for (File file : files) {
            file.addIntend(this.getIntend() + 2);
            file.ls();
        }
    }

    @Override
    public void addFile(File file) {
        this.files.add(file);
    }

    @Override
    public File[] getFiles() {
        return files.toArray(new File[files.size()]);
    }

    @Override
    public boolean removeFile(File file) {
        return files.remove(file);
    }
}
