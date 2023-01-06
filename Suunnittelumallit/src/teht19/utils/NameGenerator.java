package teht19.utils;

import java.util.Random;

public class NameGenerator {
    Random random = new Random();

    private String[] firstNames = {
        "Gregory", "Lisa", "Rachel", "Mark", "Vincent", "Tammy", "John", "George", "Jerry", "Thomas",
        "Yvonne", "Melissa", "Joshua", "Vanessa", "Sylvia", "Tracey", "Stephanie", "Jared", "Samantha", "Jennifer",
        "Michael", "Kevin", "Adriana", "Melinda", "Linda", "Megan", "Andrew", "Aaron", "John", "Raymond",
    };

    private String[] lastNames = {
        "Miller", "Powell", "Moore", "Bradley", "James", "Olson", "Schneider", "Nelson", "Griffin", "Moore",
        "Garcia", "Herrera", "Pollard", "Powell", "Fletcher", "Mills", "Fisher", "Reed", "Daniels", "Mcintosh",
        "Martinez", "Brewer", "Weber", "Wilson", "Johnson", "Estes", "Nielsen", "Vincent", "Hicks", "Ramsey"
    };

    public String[] generateFirstLastNameArr(){
        int firstNameIndex = generateRandNum(0, firstNames.length);
        int lastNameIndex = generateRandNum(0, lastNames.length);

        return new String[]{ firstNames[firstNameIndex], lastNames[lastNameIndex] };
    }

    private int generateRandNum(int minValue, int maxValue){
        return random.nextInt(minValue, maxValue);
    }
}
