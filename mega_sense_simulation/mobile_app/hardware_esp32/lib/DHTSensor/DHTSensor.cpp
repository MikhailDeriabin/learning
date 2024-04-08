#include "DHTSensor.h"
#include "Arduino.h"

DHTSensor::DHTSensor(int pinNumber) : pinNumber(pinNumber){
   this->dht = new DHT(pinNumber, DHT11);
   dht->begin();
   pinMode(pinNumber, OUTPUT);
}

float DHTSensor::getTemerature(){ return this->dht->readTemperature(); }
float DHTSensor::getHumidity(){ return this->dht->readHumidity(); }