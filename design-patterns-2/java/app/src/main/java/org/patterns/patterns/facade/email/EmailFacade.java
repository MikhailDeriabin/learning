package org.patterns.patterns.facade.email;

import org.patterns.patterns.facade.Order;
import org.patterns.patterns.facade.email.Template.TemplateType;

/**
 * Facade provides simple methods for client to use the whole package(s)
 * Client code does not have to know all about these classes and
 * we know what the client code needs to do in advance so we can easily write
 * methods for these actions here in facade.
 */
public class EmailFacade {
    /**
     * easy peasy method
     * @param order
     * @return
     */
    public boolean sendOrderEmail(Order order) {
        Template template = TemplateFactory.createTemplateFor(TemplateType.Email);
        Stationary stationary = StationaryFactory.createStationary();
        Email email = Email.getBuilder()
                        .withTemplate(template)
                        .withStationary(stationary)
                        .forObject(order)
                        .build();
        Mailer mailer = Mailer.getMailer();
        return mailer.send(email);
    }
}
