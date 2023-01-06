package teht21;

import teht21.part.CPU;
import teht21.part.HardDrive;
import teht21.part.RAM;

public class ComputerFacade {
    private CPU cpu;
    private RAM ram;
    private HardDrive drive;
    private char[] driveContent = { 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' };

    public ComputerFacade() {
        this.cpu = new CPU();
        this.ram = new RAM(cpu);
        cpu.setRam(ram);
        this.drive = new HardDrive();
        this.drive.setContent(driveContent);
    }

    public void start(){
        int size = 1;

        System.out.println("-Turn on the computer");
        cpu.freeze();

        System.out.println("-Load data from hard drive to the RAM (1 char by iteration)");
        while (cpu.getCurrentPosition() < drive.getContent().length){
            char[] data = drive.read(cpu.getCurrentPosition(), size);
            ram.load(cpu.getCurrentPosition(), data);

            cpu.jump(cpu.getCurrentPosition()+size);
        }

        System.out.println("-Print data from the RAM");
        cpu.jump(0);
        cpu.execute();

        System.out.println("-Turn off the computer");
        cpu.freeze();
    }
}
