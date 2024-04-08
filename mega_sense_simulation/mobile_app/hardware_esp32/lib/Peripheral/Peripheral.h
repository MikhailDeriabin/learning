#ifndef SERVER_H
#define SERVER_H

#include <Arduino.h>
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include "CharacteristicFactory.h"
#include "PeripheralState.h"
#include "ConnectionCallbacks.h"

class Peripheral{
private:
    BLEServer* server;
    BLEService* service;
    BLECharacteristic** characteristics;
    PeripheralState peripheralState;
    const char* serviceUUID;
    const int characteristicsCount;
    int currentCharacteristicsIndex;
    CharacteristicFactory* characteristicFactory;

public:
    Peripheral(const char* deviceName, const char* serviceUUID, const int characteristicsCount);
    BLECharacteristic* addCharacteristic(DataType type);
    void advertise();
    void sendAllData();
    void start();
    PeripheralState getPeripheralState();
    ~Peripheral();
};

#endif