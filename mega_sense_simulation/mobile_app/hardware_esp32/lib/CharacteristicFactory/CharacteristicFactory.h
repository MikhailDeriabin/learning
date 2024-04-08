#ifndef CHARACTERISTICFACTORY_H
#define CHARACTERISTICFACTORY_H

#include <BLEUtils.h>
#include "DataType.h"

#define UNKNOWN_UUID BLEUUID((uint16_t)0x0000)
#define TEMPERATURE_UUID BLEUUID((uint16_t)0x0543)
#define HUMIDITY_UUID BLEUUID((uint16_t)0x0544)
#define DESCRIPTOR_UUID BLEUUID((uint16_t)0x2902)

class CharacteristicFactory{
private:

public:
    CharacteristicFactory();
    BLECharacteristic* create(DataType type);
};

#endif