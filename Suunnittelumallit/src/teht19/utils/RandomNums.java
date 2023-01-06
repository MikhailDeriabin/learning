package teht19.utils;

import java.util.Random;

public class RandomNums {
    public static int generateRandNum(int minValue, int maxValue){
        Random random = new Random();
        return random.nextInt(minValue, maxValue);
    }

    public static float generateRandNum(float minValue, float maxValue){
        Random random = new Random();
        return random.nextFloat(minValue, maxValue);
    }
}
