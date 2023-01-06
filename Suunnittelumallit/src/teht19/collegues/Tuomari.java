package teht19.collegues;

import teht19.IMediator;
import teht19.utils.Hyppy;
import teht19.utils.Person;
import teht19.utils.RandomNums;

public class Tuomari extends Person {
    public Tuomari(String firstName, String lastName) {
        super(firstName, lastName);
    }

    public void setPointsToJumper(Hyppääjä jumper){
        Hyppy[] jumps = jumper.getJumps();
        for(int i=0; i< jumps.length; i++){
            setPoints(jumps[i]);
        }
    }

    private void setPoints(Hyppy jump){
        int jumpBeauty = jump.getBeauty();
        int jumpTechnique = jump.getTechnique();

        float maxPoints = jumpBeauty + jumpTechnique;
        float minPoints = maxPoints * 0.7f;

        float finalPoints = RandomNums.generateRandNum(minPoints, maxPoints);

        jump.addPoints(finalPoints);
    }

    @Override
    public String toString(){
        return "Tuomari " + super.toString();
    }
}
