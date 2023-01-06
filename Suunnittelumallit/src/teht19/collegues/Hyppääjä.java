package teht19.collegues;

import teht19.IMediator;
import teht19.utils.*;

public class Hyppääjä extends Person {

    IMediator mediator;
    private Country country;
    private Hyppy[] jumps;

    public Hyppääjä(IMediator mediator, String firstName, String lastName, Country country) {
        super(firstName, lastName);
        this.mediator = mediator;
        this.country = country;
        jumps = new Hyppy[Settings.hyppyCount];
    }

    public void jump(){
        for(int i=0; i<jumps.length; i++){
            jumps[i] = generateJump();
        }

        mediator.triggerMittaus(this);
    }

    public Country getCountry() {
        return country;
    }
    public void setCountry(Country country) {
        this.country = country;
    }

    public Hyppy[] getJumps() {
        return jumps;
    }
    public void setJumps(Hyppy[] jumps) {
        this.jumps = jumps;
    }

    private Hyppy generateJump(){
        int jumpTechnique = RandomNums.generateRandNum(1, 20);
        int jumpBeauty = RandomNums.generateRandNum(1, 20);

        return new Hyppy(jumpTechnique, jumpBeauty);
    }

    @Override
    public String toString(){
        return "Hyppääjä " + super.toString() + ", " + country;
    }
}
