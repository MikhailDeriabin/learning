package teht19.collegues;

import teht19.IMediator;
import teht19.utils.Hyppy;
import teht19.utils.Person;
import teht19.utils.RandomNums;

public class Mittamies extends Person {
    IMediator mediator;

    public Mittamies(IMediator mediator, String firstName, String lastName) {
        super(firstName, lastName);
        this.mediator = mediator;
    }

    public void measureDistances(Hyppääjä jumper){
        Hyppy[] jumps = jumper.getJumps();
        for(int i=0; i< jumps.length; i++){
            measureDistance(jumps[i]);
        }

        mediator.triggerArvaaminen(jumper);
    }

    private void measureDistance(Hyppy jump){
        int jumpDistance = RandomNums.generateRandNum(1, 50);
        jump.setDistance(jumpDistance);
    }

    @Override
    public String toString(){
        return "Mittamies " + super.toString();
    }
}
