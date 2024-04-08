#include "CharacteristicFactory.h"

CharacteristicFactory::CharacteristicFactory(){

}

BLECharacteristic* CharacteristicFactory::create(DataType type){
    BLEDescriptor descriptor(DESCRIPTOR_UUID);
    BLECharacteristic* characteristic;

    switch (type){
        case TEMPERATURE:
            characteristic = new BLECharacteristic(TEMPERATURE_UUID, BLECharacteristic::PROPERTY_NOTIFY);
            descriptor.setValue("celsius");
            break;

        case HUMIDITY:
            characteristic = new BLECharacteristic(HUMIDITY_UUID, BLECharacteristic::PROPERTY_NOTIFY);
            descriptor.setValue("percentage");
            break;

        case NUMBER:
            characteristic = new BLECharacteristic(UNKNOWN_UUID, BLECharacteristic::PROPERTY_NOTIFY);
            descriptor.setValue("number");
            break;
            
        default:
            break;
    }

    characteristic->addDescriptor(&descriptor);

    return characteristic;
}