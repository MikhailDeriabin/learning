import {StyleSheet, Text} from "react-native";
import {Color} from "../../constant/color";

export default function ScreenTitle({text}) {
    return (
        <Text style={styles.text}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.text
    },
});