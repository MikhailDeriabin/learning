#ifndef LAMP_H
#define LAMP_H

/**
 * @brief The class represents LED lamp.
 * The class has methods for manipulating with LED DC lamps.
 */
class Lamp{
private:
    const int pinNumber;
    const bool isPinAnalog;
    int intensivity;
    float brightness;
public:
    Lamp(int pinNumber, bool isPinAnalog=false, int intensivity=255, float brightness=1);

    /**
     * @brief The method make a pulse signal(turn on -> turn off) with the given interval.
     * 
     * @param interval pulse interval time in ms
     */
    void pulse(float interval=1000);

    /**
     * @brief The method turn the lamp on.
     */
    void turnOn();

    /**
     * @brief The method turn the lamp off.
     */
    void turnOff();

    void increaseIntensivity(int intensivity, bool write=false);
    void decreaseIntensivity(int intensivity, bool write=false);

    void setIntensivity(int intensivity, bool write=false);
    int getIntensivity();

    void setBrightness(float brightness, bool write=false);
    float getBrightness();
};

#endif