#include "Peripheral.h"

Peripheral::Peripheral(const char* deviceName, const char* serviceUUID, const int characteristicsCount) : 
    characteristicsCount(characteristicsCount), serviceUUID(serviceUUID){

    characteristicFactory = new CharacteristicFactory();
    peripheralState = PeripheralState::DISCONNECTED;
    currentCharacteristicsIndex = 0;
    for(int i=0; i< characteristicsCount; i++){
        characteristics[i] = characteristicFactory->create(DataType::NUMBER);
    }

    BLEDevice::init(deviceName);
    server = BLEDevice::createServer();
    server->setCallbacks(new ConnectionCallbacks(&peripheralState));
    service = server->createService(serviceUUID);
    service->start();
}

BLECharacteristic* Peripheral::addCharacteristic(DataType type){
    if(currentCharacteristicsIndex < characteristicsCount){
        BLECharacteristic* characteristic = characteristicFactory->create(type);
        characteristics[currentCharacteristicsIndex] = characteristic;
        currentCharacteristicsIndex++;

        return characteristics[currentCharacteristicsIndex];
    }

    Serial.println("You can not add new Characteristic, limit exceeded");
    return characteristicFactory->create(DataType::NUMBER);
}

void Peripheral::advertise(){
    //Set up advertising
    BLEAdvertising* devAdvertising = BLEDevice::getAdvertising();
    devAdvertising->addServiceUUID(serviceUUID);
    devAdvertising->setScanResponse(true);
    //For iPhone connections issue
    devAdvertising->setMinPreferred(0x06);  
    devAdvertising->setMinPreferred(0x12);

    server->getAdvertising()->start();
    Serial.println("Waiting a client connection to notify...");
}

void Peripheral::sendAllData(){
    for(int i=0; i<currentCharacteristicsIndex; i++)
        characteristics[i]->notify();
}

void Peripheral::start(){
    if(currentCharacteristicsIndex > 0){
        service->start();
    } else
        Serial.println("Add some charactiristic(s) first");
}

PeripheralState Peripheral::getPeripheralState(){ return this->peripheralState; }

Peripheral::~Peripheral(){
    delete[] characteristics;
}