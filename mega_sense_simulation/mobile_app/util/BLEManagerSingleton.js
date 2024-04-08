import {BleManager} from "react-native-ble-plx";

export const BLEManagerSingleton = (function () {
    let instance = null;

    return {
        getInstance: function () {
            if(instance === null){
                instance = new BleManager();
            }

            return instance;
        }
    }
})();