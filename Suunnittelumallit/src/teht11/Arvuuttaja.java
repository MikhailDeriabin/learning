package teht11;

import java.util.Random;

public class Arvuuttaja {
    private final Random rand = new Random();
    private int maxRandNum;

    private int generateRandNum(int maxNum){
        return rand.nextInt(maxNum+1);
    }

    public Arvuuttaja(int maxRandNum) {
        this.maxRandNum = maxRandNum;
    }

    public Object liityPeliin(Pelaaja player){
         int numberToGuess = generateRandNum(maxRandNum);
         return new PelaajaState(player, numberToGuess);
    }

    public boolean arvaus(int guess, Object pelaajaState){
        PelaajaState state = (PelaajaState) pelaajaState;
        return state.numberToGuess == guess;
    }

    private class PelaajaState{
        private Pelaaja player;
        private int numberToGuess;

        private PelaajaState(Pelaaja player, int numberToGuess) {
            this.player = player;
            this.numberToGuess = numberToGuess;
        }
    }
}
