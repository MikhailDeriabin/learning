package teht19.utils;

import java.util.ArrayList;
import java.util.List;

public class Taulu {
    private List<Taulurivi> board;

    public Taulu() {
        this.board = new ArrayList<>();
    }

    public List<Taulurivi> getBoard() {
        return board;
    }
    public void setBoard(ArrayList<Taulurivi> board) {
        this.board = board;
    }
    public void addRivi(Taulurivi taulurivi){
        this.board.add(taulurivi);
    }

    @Override
    public String toString(){
        StringBuilder result = new StringBuilder();
        result.append("----- Tournament board -----").append("\n");
        for(Taulurivi rivi : board){
            result.append(rivi).append("\n");
        }

        return result.toString();
    }
}
