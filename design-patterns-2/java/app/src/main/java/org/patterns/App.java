package org.patterns;

import org.patterns.patterns.IRunner;
import org.patterns.patterns.proxy.*;

public class App {
    public static void main(String[] args) {
        IRunner runner = new Runner();
        runner.run(1);
    }
}
