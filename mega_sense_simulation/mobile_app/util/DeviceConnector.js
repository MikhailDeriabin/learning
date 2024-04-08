import {BLEManagerSingleton} from "./BLEManagerSingleton";
import base64 from "react-native-base64";

export default class DeviceConnector {
    constructor(deviceId, deviceLocalName, serviceUUID, characteristicUUID, dataSetter) {
        this.deviceId = deviceId;
        this.deviceLocalName = deviceLocalName;
        this.serviceUUID = serviceUUID;
        this.characteristicUUID = characteristicUUID;
        this.bleManager = BLEManagerSingleton.getInstance();
        this.dataSetter = dataSetter;
    }

    deviceId;
    deviceLocalName;
    device;
    serviceUUID;
    characteristicUUID;
    bleManager;
    dataSetter;

    connect = async () => {
        if(!this.device || !this.device.isConnected())
            this.device = await this.bleManager.connectToDevice(this.deviceId);
    }

    readData = async () => {
        await this.connect();

        if(this.device){
            try {
                const deviceChars = await this.bleManager.discoverAllServicesAndCharacteristicsForDevice(this.deviceId);
                const services = await deviceChars.services();
                const serviceUUIDs = services.map(service => service.uuid);
                console.log('services', serviceUUIDs);

                const characteristics = await deviceChars.characteristicsForService(this.serviceUUID);
                const characteristicUUIDs = characteristics.map(characteristic => characteristic.uuid);
                console.log('characteristics', characteristicUUIDs);

                await this.bleManager.monitorCharacteristicForDevice(
                    this.deviceId,
                    this.serviceUUID,
                    this.characteristicUUID,
                    (e, characteristic) => {
                        if(e)
                            console.log(e);
                        if(characteristic){
                            const value = characteristic.value;
                            const parsedValue = base64.decode(value);
                            this.dataSetter({temp: parsedValue});
                        }
                    }
                );
            } catch (e) {
                console.log('Error with connecting', e);
            }
        }
    }

    closeConnection = () => {
        if(this.device.isConnected())
            this.bleManager.cancelDeviceConnection(this.deviceId);
        this.device = null;
    }
}