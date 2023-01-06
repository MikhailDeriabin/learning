package teht21.part;

public class CPU {
    private RAM ram;
    private boolean isSystemOn;
    private int currentPosition;

    public CPU() {
        this.isSystemOn = false;
        this.currentPosition = 0;
    }

    public void freeze(){
        isSystemOn = !isSystemOn;
    }

    public void jump(int position){
        currentPosition = position;
    }

    public void execute(){
        char[] ramContent = ram.getContent();
        String result = "";
        for(int i=currentPosition; i<ramContent.length; i++){
            if(ramContent[i] == 0)
                break;
            result += ramContent[i];
        }
       System.out.println(result);
    }

    public boolean isSystemOn() {
        return isSystemOn;
    }

    public int getCurrentPosition() {
        return currentPosition;
    }

    public void setRam(RAM ram) {
        this.ram = ram;
    }
}
