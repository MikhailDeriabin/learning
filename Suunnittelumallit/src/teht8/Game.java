package teht8;

abstract class Game {

    protected int playersCount;

    abstract void initializeGame();

    abstract void makePlay(int player);

    abstract boolean endOfGame();

    abstract void printWinner();

    /* A template method : */
    public final void playOneGame(int playersCount) {
        this.playersCount = playersCount;
        initializeGame();
        int j = 0;
        while (!endOfGame()){
            makePlay(j);
            j = (j + 1) % playersCount;
        }
        printWinner();
    }
}

