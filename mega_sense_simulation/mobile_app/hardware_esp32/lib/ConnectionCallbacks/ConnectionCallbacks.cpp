#include "ConnectionCallbacks.h"

ConnectionCallbacks::ConnectionCallbacks(PeripheralState* peripheralState){
    this->peripheralState = peripheralState;
}

void ConnectionCallbacks::onConnect(BLEServer* pServer) {
    Serial.println("Client connected");
    *peripheralState = PeripheralState::CONNECTED;
}

void ConnectionCallbacks::onDisconnect(BLEServer* pServer) {
    Serial.println("Client disconnected");
    *peripheralState = PeripheralState::DISCONNECTED;
    pServer->getAdvertising()->start();
}