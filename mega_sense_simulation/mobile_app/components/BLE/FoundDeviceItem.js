import {StyleSheet, View, TouchableOpacity} from "react-native";
import NormalText from "../text/NormalText";
import {Color} from "../../constant/color";

export default function FoundDeviceItem({device, goToDeviceDataScreen}) {
    function handlePress() {
        goToDeviceDataScreen({id: device.id, localName: device.localName});
    }

    const textContent = device.localName ? device.localName : device.id;
    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.textWrapper} >
                <NormalText style={styles.text} text={textContent} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textWrapper: {
        borderWidth: 1,
        borderColor: Color.elemBorder,
        paddingVertical: 15,
        marginBottom: 10
    },

    text: {
        textAlign: 'center'
    }
});