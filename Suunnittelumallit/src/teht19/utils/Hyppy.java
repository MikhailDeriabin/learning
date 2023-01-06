package teht19.utils;

public class Hyppy {
    private int technique, beauty, distance;
    private float[] points;
    int nextPointsIndex;

    public Hyppy(int technique, int beauty) {
        this.technique = technique;
        this.beauty = beauty;
        points = new float[Settings.tuomariCount];

        nextPointsIndex = 0;
    }

    public int getTechnique() {
        return technique;
    }
    public void setTechnique(int technique) {
        this.technique = technique;
    }

    public int getBeauty() {
        return beauty;
    }
    public void setBeauty(int beauty) {
        this.beauty = beauty;
    }

    public int getDistance() {
        return distance;
    }
    public void setDistance(int distance) {
        this.distance = distance;
    }

    public float[] getPoints() {
        return points;
    }
    public void setPoints(float[] points) {
        this.points = points;
    }
    public void addPoints(float points){
        this.points[nextPointsIndex] = points;
        nextPointsIndex++;
    }

    @Override
    public String toString(){
        return "Hyppy " + distance + " m";
    }
}
