package teht11;

import java.lang.reflect.Array;

public class BinarySearchArray{
    private int counter;
    private int[] array;

    public BinarySearchArray(int[] array) {
        this.array = array;
        counter = 0;
    }

    public void insert(int elem){
        int elemIndex = getElemIndex(elem);
        int[] newArr = new int[this.array.length+1];
        for(int i=0; i<elemIndex; i++){
            newArr[i] = this.array[i];
        }

        newArr[elemIndex] = elem;

        for(int i=elemIndex; i<this.array.length; i++){
            newArr[i+1] = this.array[i];
        }

        this.array = newArr;
    }

    public int findElemIndex(int elem){
        counter = 0;

        int minIndex = 0;
        int maxIndex = array.length-1;
        int result = -1;
        while(minIndex <= maxIndex){
            int middleElemIndex = minIndex + (maxIndex-minIndex)/2;
            counter++;

            if(elem == array[middleElemIndex]){
                result = middleElemIndex;
                break;
            }else if(elem < array[middleElemIndex]){
                maxIndex = middleElemIndex-1;
            } else if(elem  > array[middleElemIndex]){
                minIndex = middleElemIndex+1;
            }
        }

        return result;
    }

    public void printLastSearchIterationCount(){
        System.out.println("Search iteration count " + counter + ". In array with size: " + this.array.length);
    }

    private int getElemIndex(int elem){
        int result = 0;
        if(this.array.length > 0){
            int minIndex = 0;
            int maxIndex = array.length-1;

            while(minIndex <= maxIndex){
                int middleElemIndex = minIndex + (maxIndex-minIndex)/2;

                if(elem == array[middleElemIndex]){
                    result = middleElemIndex;
                    break;
                }else if(elem < array[middleElemIndex]){
                    maxIndex = middleElemIndex-1;
                    result = maxIndex;
                    result++;
                } else if(elem > array[middleElemIndex]){
                    minIndex = middleElemIndex+1;
                    result = minIndex;
                }
            }
        }

        return result;
    }

    public int[] getArray() {
        return array;
    }
    public void setArray(int[] array) {
        this.array = array;
    }
}
