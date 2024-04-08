import NormalText from "../components/text/NormalText";
import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import ScreenTitle from "../components/text/ScreenTitle";
import DeviceConnector from "../util/DeviceConnector";
import {API_URL} from "@env";

export default function DeviceDataScreen({route, navigation}) {
    const [data, setData] = useState(null);
    const [tempText, setTempText] = useState('');
    const [titleText, setTitleText] = useState('');

    const {device} = route.params;
    const deviceLocalName = 'ESP32';
    const serviceUUIDToRead = '90aa77d2-bb5d-4f49-adc3-70c6a0a5e763';
    const characteristicUUIDToRead = 'cba1d466-344c-4be3-ab3f-189f80dd7518';
    //TODO: add all vars in production to .env
    const deviceConnector = new DeviceConnector(device.id, deviceLocalName, serviceUUIDToRead, characteristicUUIDToRead, setTemperatureData);

    function setTemperatureData(data) {
        const tempDataText = (data != null && data.temp != null) ? 'Temperature: ' + data.temp + ' °C' : 'No data received';
        setTempText(tempDataText)
        setData(data);
        sendDataToServer(data);
    }

    async function connectToDevice() {
        if(device && device.localName && device.localName === deviceLocalName){
            await deviceConnector.readData();
        } else {
            setTempText('Sowwy :(, we do not support that device');
        }
    }

    const sendDataToServer = async (data) => {
        try{
            fetch(`${API_URL}/esp32`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        } catch (e) {
            console.log('Problem with sending data to server', e);
        }
    };

    useEffect(() => {
        const deviceNameText = device.localName ? device.localName : device.id;
        setTitleText(deviceNameText);
        setTempText('No data to display yet');

        async function connectAndRead(){
            await connectToDevice();
        }
        connectAndRead();

        return () => {
            try {
                deviceConnector.closeConnection();
            } catch (e) {
                console.log('Problems with disconnection', e);
            }

        }
    }, []);

    return(
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <ScreenTitle text={titleText}/>
            </View>

            <View style={styles.textWrapper}>
                <NormalText style={styles.text} text={tempText}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },

    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },

    textWrapper: {
        flex: 10,
        justifyContent: 'center',

    },

    text: {
        textAlign: 'center',
        fontSize: 20
    }
});