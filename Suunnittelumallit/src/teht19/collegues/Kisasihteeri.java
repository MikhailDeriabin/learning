package teht19.collegues;

import teht19.utils.Person;
import teht19.utils.Taulu;
import teht19.utils.Taulurivi;

import java.util.ArrayList;
import java.util.List;

public class Kisasihteeri extends Person {
    private final Taulu board;

    public Kisasihteeri(String firstName, String lastName) {
        super(firstName, lastName);
        board = new Taulu();
    }

    public void saveResult(Hyppääjä jumper){
        Taulurivi rivi = new Taulurivi(jumper);
        board.addRivi(rivi);
    }

    public Hyppääjä getWinner(){
        List<Taulurivi> rows = board.getBoard();
        Hyppääjä result = rows.get(0).getJumper();
        Taulurivi best = rows.get(0);

        for(Taulurivi row : rows){
            if(row.getAveragePoints() > best.getAveragePoints()){
                result = row.getJumper();
            }
        }

        return result;
    }

    public void printResults(){
        System.out.println("Winner of the tournament is " + getWinner());
        System.out.println(board);
    }

    @Override
    public String toString(){
        return "Kisasihteeri " + super.toString();
    }
}
