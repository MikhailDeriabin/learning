#ifndef DHTSensor_H
#define DHTSensor_H

#include "Adafruit_Sensor.h"
#include "DHT.h"

class DHTSensor{
private:
    DHT* dht;
    const int pinNumber;
public:
    DHTSensor(int pinNumber);
    float getTemerature();
    float getHumidity();
};

#endif