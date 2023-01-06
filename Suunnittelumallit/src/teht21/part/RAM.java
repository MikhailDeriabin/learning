package teht21.part;

public class RAM {
    private char[] content;
    private CPU cpu;

    public RAM(CPU cpu) {
        this.cpu = cpu;
        this.content = new char[12];
    }

    public void load(int position, char[] data){
        if(cpu.isSystemOn()){
            for(int i=0; i<data.length; i++){
                content[position+i] = data[i];
            }
        } else{
            clear();
        }
    }

    private void clear(){
        content = new char[12];
    }

    public char[] getContent() {
        return content;
    }
}
