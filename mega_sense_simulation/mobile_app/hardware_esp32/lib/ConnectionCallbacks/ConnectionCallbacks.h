#ifndef CONNECTIONCALLBACKS_H
#define CONNECTIONCALLBACKS_H

#include <Arduino.h>
#include <BLEUtils.h>
#include "PeripheralState.h"

class ConnectionCallbacks: public BLEServerCallbacks{
private:
   PeripheralState* peripheralState; 

public:
    ConnectionCallbacks(PeripheralState* peripheralState);
    void onConnect(BLEServer* pServer);
    void onDisconnect(BLEServer* pServer);

};

#endif