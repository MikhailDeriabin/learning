package teht19.utils;

import teht19.collegues.Hyppääjä;

public class Taulurivi {
    private Hyppääjä jumper;
    private float averagePoints;

    public Taulurivi(Hyppääjä jumper) {
        this.jumper = jumper;
        averagePoints = calculateAveragePoints();
    }

    private float calculateAveragePoints(){
        float totalPoints = 0;

        Hyppy[] jumps = this.jumper.getJumps();
        for(int i=0; i< jumps.length; i++){
            float[] points = jumps[i].getPoints();
            for(int j=0; j< points.length; j++){
                totalPoints += points[j];
            }
        }
        int jumpPointsCount = jumps.length * (jumps[0].getPoints().length);

        return totalPoints/jumpPointsCount;
    }

    public Hyppääjä getJumper() {
        return jumper;
    }
    public void setJumper(Hyppääjä jumper) {
        this.jumper = jumper;
    }

    public float getAveragePoints() {
        return averagePoints;
    }
    public void setAveragePoints(float averagePoints) {
        this.averagePoints = averagePoints;
    }

    @Override
    public String toString(){
        StringBuilder result = new StringBuilder();

        result.append("-------------------------\n");
        result.append(jumper).append("\n");
        result.append(averagePoints).append(" points");
        result.append("\n");
        Hyppy[] jumps = jumper.getJumps();
        for(int i=0; i< jumps.length; i++){
            result.append(jumps[i]).append("\n");
        }

        result.append("-------------------------");

        return result.toString();
    }
}
