package teht21.part;

public class HardDrive {
    private char[] content;

    public HardDrive() {
        this.content = new char[0];
    }

    public char[] read(int position, int size){
        char[] result = new char[size];
        for(int i=0; i<size && (i+position)<content.length; i++){
            result[i] = this.content[i+position];
        }

        return result;
    }

    public char[] getContent() {
        return content;
    }
    public void setContent(char[] content) {
        this.content = content;
    }
}
