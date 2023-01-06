package teht3.computerComponent;

import teht3.electronicComponent.*;

//leaf + client
public class MotherBoard extends ComputerComponent{
    private final String name = "Mother Board";
    private float price;

    public MotherBoard(){
        super();

        ElectronicComponent board = generateMotherBoard(200, 5, 300, 100);
        this.price = board.getPrice();

        super.setName(this.name);
        super.setPrice(this.price);
    }

    private ElectronicComponent generateMotherBoard(int capacitorCount, int controllerCount, int diodeCount, int transistorCount){
        ElectronicBoard board = new ElectronicBoard();

        addComponentsToBoard(board, new Capacitor(0.02f), capacitorCount);
        addComponentsToBoard(board, new Controller(10f), controllerCount);
        addComponentsToBoard(board, new Diode(0.002f), diodeCount);
        addComponentsToBoard(board, new Transistor(0.01f), transistorCount);

        return board;
    }

    private void addComponentsToBoard(ElectronicBoard board, ElectronicComponent component, int count){
        for(int i=0; i<count; i++){
            board.addComponent(component);
        }
    }
}
