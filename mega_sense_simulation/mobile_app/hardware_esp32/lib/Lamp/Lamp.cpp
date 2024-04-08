#include "Lamp.h"
#include "Arduino.h"

Lamp::Lamp(int pinNumber, bool isPinAnalog, int intensivity, float brightness) : pinNumber(pinNumber), isPinAnalog(isPinAnalog){
    pinMode(pinNumber, OUTPUT);
    digitalWrite(pinNumber, LOW);
    if(isPinAnalog){
        setIntensivity(intensivity);
        setBrightness(brightness);
    }       
}

void Lamp::turnOn(){
    if(!isPinAnalog)
        digitalWrite(pinNumber, HIGH);
    else
        analogWrite(pinNumber, intensivity*brightness);      
}

void Lamp::turnOff(){    
    if(!isPinAnalog)
        digitalWrite(pinNumber, LOW);
    else
        analogWrite(pinNumber, 0);  
}

void Lamp::pulse(float interval){
    //Can not see blinking if the inteval is below 20 ms
    if(interval < 20)
        interval = 20;

    turnOn();
    delay(interval);
    turnOff();
    delay(interval);   
}

void Lamp::increaseIntensivity(int intensivity, bool write){
    setIntensivity(this->intensivity + intensivity);
    if(write)
        analogWrite(pinNumber, this->intensivity*brightness);
}
void Lamp::decreaseIntensivity(int intensivity, bool write){
    setIntensivity(this->intensivity - intensivity);
    if(write)
        analogWrite(pinNumber, this->intensivity*brightness);
}

void Lamp::setIntensivity(int intensivity, bool write){ 
    this->intensivity = intensivity > 255 ? 255 : intensivity;
    this->intensivity = intensivity < 0 ? 0 : intensivity;
    this->intensivity = intensivity; 
    if(write)
        analogWrite(pinNumber, this->intensivity*brightness);
}
int Lamp::getIntensivity(){ return this->intensivity; }

void Lamp::setBrightness(float brightness, bool write){
    brightness = brightness > 1 ? 1 : brightness;
    brightness = brightness < 0 ? 0 : brightness;
    this->brightness = brightness;
    if(write)
        analogWrite(pinNumber, intensivity*this->brightness);
}
float Lamp::getBrightness(){ return this->brightness; }