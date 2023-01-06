package teht8;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class GuessNumber extends Game{

    private final ArrayList<Player> players;
    private int maxScore;

    private final Random rand = new Random();
    private int maxRandValue = 2;

    private Player winner;

    public GuessNumber() {
        super();
        maxScore = 1;
        this.players = new ArrayList<>();
    }

    @Override
    void initializeGame() {
        System.out.println("Welcome to the guess number game!");
        System.out.println("Rules are simple:");
        System.out.println("The player, who guess the right number(randomly generated) get one point");
        System.out.println("The player, who first gets maximum amount of the point wins the game");
        System.out.println("Note that each round will be a new number to guess");

        System.out.println("What is the maximum point amount? E.g. when the game will end?");

        this.maxScore = getIntFromUser(1, 1000, "Enter a maximum amount: ");

        System.out.println("Now let's create player names");
        System.out.println("Please provide name of each player (" + super.playersCount + " total)");


        Scanner scanner = new Scanner(System.in);
        for(int i=0; i<super.playersCount; i++){
            System.out.println("Name of player number " + (i+1) + " (press name when it is typed)");
            String name = scanner.nextLine();
            players.add(new Player(name));
        }

        System.out.println("Thanks, let's play now!");
    }

    @Override
    void makePlay(int player) {
        System.out.println(players.get(player) + ", what is your suggestion?");
        String msg = "Type integer number from 0 to " + (maxRandValue-1) + " and press enter";
        int playerGuess = getIntFromUser(0, maxRandValue-1, msg);
        int randNum = rand.nextInt(maxRandValue);
        if(playerGuess == randNum){
            players.get(player).addScore(1);
            System.out.println("+1 point");
        } else{
            System.out.println("Nope!");
        }
    }

    @Override
    boolean endOfGame() {
        for(Player player : players){
            if(player.getScore() >= maxScore) {
                this.winner = player;
                System.out.println("Game over!");
                return true;
            }
        }
        return false;
    }

    @Override
    void printWinner() {
        System.out.println("The winner of the game is " + this.winner);
    }

    private int getIntFromUser(int min, int max, String msg){
        Scanner scanner = new Scanner(System.in);
        int result = min - 1;
        while(result <= min || result >= max){
            System.out.println(msg);
            try{
                String scoreInput = scanner.nextLine();
                result = Integer.parseInt(scoreInput);
                if(result >= min && result <= max)
                    break;
            }catch (Exception ignored){
            }
            System.out.println("Please enter an integer number greater than " + min + " and less than " + max);
        }
        return result;
    }
}
