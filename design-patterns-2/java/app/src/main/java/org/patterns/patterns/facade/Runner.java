package org.patterns.patterns.facade;

import org.patterns.patterns.IRunner;
import org.patterns.patterns.facade.email.EmailFacade;

public class Runner implements IRunner {
    @Override
    public void run(int exampleNum) {
        // Here we can use only few classes from the email package to send an email
        Order order = new Order("10", 99.9);
        EmailFacade sender = new EmailFacade();

        boolean isSuccess = sender.sendOrderEmail(order);

        System.out.println("Is email with order sent? " + isSuccess);
    }
}
