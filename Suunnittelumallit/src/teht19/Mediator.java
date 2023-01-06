package teht19;

import teht19.collegues.*;
import teht19.utils.Hyppy;

import java.util.ArrayList;
import java.util.List;

public class Mediator implements IMediator {
    private List<Hyppääjä> jumpers;
    private Mittamies mittamies;
    private List<Tuomari> tuomarit;
    private Kisasihteeri kisasihteeri;

    public Mediator() {
        jumpers = new ArrayList<>();
        tuomarit = new ArrayList<>();
    }

    @Override
    public void addHyppääjä(Hyppääjä jumper){
        jumpers.add(jumper);
    }
    @Override
    public void registerMittamies(Mittamies mittamies){
        this.mittamies = mittamies;
    }
    @Override
    public void addTuomari(Tuomari tuomari){
        tuomarit.add(tuomari);
    }
    @Override
    public void registerKissasihteeri(Kisasihteeri kisasihteeri){
        this.kisasihteeri = kisasihteeri;
    }


    @Override
    public void triggerMittaus(Hyppääjä jumper){
        mittamies.measureDistances(jumper);
    }
    @Override
    public void triggerArvaaminen(Hyppääjä jumper){
        for(Tuomari tuomari : tuomarit){
            tuomari.setPointsToJumper(jumper);
        }
        triggerTallentaminen(jumper);
    }
    @Override
    public void triggerTallentaminen(Hyppääjä jumper){
        kisasihteeri.saveResult(jumper);
    }

    @Override
    public Kisasihteeri getKisasihteeri() {
        return kisasihteeri;
    }
}
