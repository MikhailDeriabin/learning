package org.patterns.patterns.composite;

import org.patterns.patterns.IRunner;

public class Runner implements IRunner{
    @Override
    public void run(int exampleNum) {
        Directory myDir1 = new Directory("myDir1");

        File myFile1 = new BinaryFile("myFile1");
        File myFile2 = new BinaryFile("myFile2");
        File myFile3 = new BinaryFile("myFile3");

        myDir1.addFile(myFile1);
        myDir1.addFile(myFile2);
        myDir1.addFile(myFile3);

        Directory myDir2 = new Directory("myDir2");
        File myFile4 = new BinaryFile("myFile4");
        File myFile5 = new BinaryFile("myFile5");
        myDir2.addFile(myFile4);
        myDir2.addFile(myFile5);

        myDir1.addFile(myDir2);

        myDir1.ls();
    }
}
