package teht11;

import java.util.Random;

public class Pelaaja extends Thread{
    private final Random rand = new Random();
    private final String playerName;
    private final int maxRandNum;
    private final ArvuuttajaCareTaker arvuuttajaCareTaker;
    private final Object state;

    private boolean isRightNumber;

    public Pelaaja(String playerName, int maxRandNum, ArvuuttajaCareTaker arvuuttajaCareTaker) {
        this.playerName = playerName;
        this.maxRandNum = maxRandNum;
        this.arvuuttajaCareTaker = arvuuttajaCareTaker;
        this.state = arvuuttajaCareTaker.liityPeliin(this);
        isRightNumber = false;
    }

    public String getPlayerName() {
        return playerName;
    }

    private int generateRandNum(int maxNum){
        return rand.nextInt(maxNum+1);
    }

    @Override
    public void run(){
        while(!isRightNumber){
            try {
                int num = generateRandNum(maxRandNum);
                System.out.println(this + ": is it " + num + "?");
                isRightNumber = arvuuttajaCareTaker.arvaus(num, state);
            }catch (Exception e){
                Thread.currentThread().interrupt();
                System.out.println("Thread was interrupted, Failed to complete operation");
            }
        }
        System.out.println(this + " won!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }

    @Override
    public String toString(){
        return "player " + playerName;
    }
}
