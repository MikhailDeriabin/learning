package teht10.person.boss;

import teht10.Application;
import teht10.person.Person;
import teht10.person.PersonType;

public class ImmediateBoss extends Person implements Boss{
    private Boss nextBoss;

    public ImmediateBoss(String name, float salary, Boss nextBoss) {
        super(name, PersonType.IMMEDIATE_BOSS, salary);
        this.nextBoss = nextBoss;
    }

    @Override
    public void riseSalary(Application application) {
        Person applicationPerson = application.getPerson();
        float riseAmount = application.getRiseAmount();
        boolean isAbleToRise = riseAmount < applicationPerson.getSalary()*0.02;
        if(isAbleToRise){
            float newSalary = applicationPerson.getSalary() + riseAmount;
            applicationPerson.setSalary(newSalary);
            application.setStatus(true);
            application.setAcceptor(this);
        } else{
            sendApplicationToNext(application);
        }
    }

    @Override
    public void sendApplicationToNext(Application application) {
        if(nextBoss != null)
            nextBoss.riseSalary(application);
    }

    public Boss getNextBoss() {
        return nextBoss;
    }
    public void setNextBoss(Boss nextBoss) {
        this.nextBoss = nextBoss;
    }
}
