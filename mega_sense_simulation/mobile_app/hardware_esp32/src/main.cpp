#include <Arduino.h>
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#include "DHTSensor.h"
#include "Lamp.h"

#define SERVER_NAME "ESP32"
#define TEMPERATURE_SERVICE_UUID "90aa77d2-bb5d-4f49-adc3-70c6a0a5e763"

#define TEMP_HUM_SENSOR_PIN 4   //D4 on board
#define GREEN_LAMP_PIN 5        //D5 on board

BLEServer* server;
BLEService* tempService;
bool isClientConnected = false;
BLECharacteristic tempCharacteristic("cba1d466-344c-4be3-ab3f-189f80dd7518", BLECharacteristic::PROPERTY_NOTIFY | BLECharacteristic::PROPERTY_READ);
BLEDescriptor tempDescriptor(BLEUUID((uint16_t)0x2902));
unsigned long lastTime = 0;
unsigned long timerDelay = 10000;

//Setup callbacks onConnect and onDisconnect
class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    Serial.println("Client connected");
    isClientConnected = true;
  }
  void onDisconnect(BLEServer* pServer) {
    Serial.println("Client disconnected");
    isClientConnected = false;
    pServer->getAdvertising()->start();
  }
};

DHTSensor* tempHumSensor;
Lamp* greenLamp;

void setup() {
  Serial.begin(9600);
  Serial.println("");

  tempHumSensor = new DHTSensor(TEMP_HUM_SENSOR_PIN);
  greenLamp = new Lamp(GREEN_LAMP_PIN);

  BLEDevice::init(SERVER_NAME);
  server = BLEDevice::createServer();
  server->setCallbacks(new MyServerCallbacks());
  tempService = server->createService(TEMPERATURE_SERVICE_UUID);
  tempService->addCharacteristic(&tempCharacteristic);
  tempDescriptor.setValue("celcius");
  tempCharacteristic.addDescriptor(&tempDescriptor);
  tempService->start();

  //Set up advertising
  BLEAdvertising* devAdvertising = BLEDevice::getAdvertising();
  devAdvertising->addServiceUUID(TEMPERATURE_SERVICE_UUID);
  devAdvertising->setScanResponse(true);
  //For iPhone connections issue
  devAdvertising->setMinPreferred(0x06);  
  devAdvertising->setMinPreferred(0x12);

  server->getAdvertising()->start();
  Serial.println("Waiting a client connection to notify...");
}

void loop() {
  if(isClientConnected){
    if ((millis() - lastTime) > timerDelay) {
      float temp = tempHumSensor->getTemerature();
      const int tempStrWholeSize = 5;
      char tempStr[tempStrWholeSize];
      dtostrf(temp, tempStrWholeSize-2, 1, tempStr);
      tempStr[tempStrWholeSize-1] = '\0';
      tempCharacteristic.setValue(tempStr);
      tempCharacteristic.notify();
      Serial.println(tempStr);
      lastTime = millis();
    }
  }

  if(isClientConnected){
    greenLamp->turnOn();
  } else{
    //call delay method inside
    greenLamp->pulse(500);
  }
  
}