package teht10;

import teht10.person.Person;
import teht10.person.boss.Boss;

public class Application {
    private Person person;
    private float riseAmount;
    private boolean status;
    private Boss acceptor;

    public Application(Person person, float riseAmount) {
        this.person = person;
        this.riseAmount = riseAmount;
        this.status = false;
    }

    public Person getPerson() {
        return person;
    }
    public void setPerson(Person person) {
        this.person = person;
    }

    public float getRiseAmount() {
        return riseAmount;
    }
    public void setRiseAmount(float riseAmount) {
        this.riseAmount = riseAmount;
    }

    public boolean isStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }

    public Boss getAcceptor() {
        return acceptor;
    }
    public void setAcceptor(Boss acceptor) {
        this.acceptor = acceptor;
    }

    @Override
    public String toString(){
        return "Application status: " + status + ". Acceptor: " + acceptor;
    }
}
