package teht3;

import teht3.computerComponent.*;

//Client
public class Main {
    public static void main(String[] args) {
        ComputerComponent computerCase = generateCase();

        computerCase.printName();
    }

    public static ComputerComponent generateCase(){
        Case computerCase = new Case();

        ComputerComponent motherBoard = new MotherBoard();
        ComputerComponent processor = new Processor();
        ComputerComponent ram = new RAM();
        ComputerComponent ssd = new SSD();
        ComputerComponent videoCard = new VideoCard();

        computerCase.addComponent(motherBoard);
        computerCase.addComponent(processor);
        computerCase.addComponent(ram);
        computerCase.addComponent(ssd);
        computerCase.addComponent(videoCard);

        return computerCase;
    }
}
