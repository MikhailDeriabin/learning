import {StyleSheet, Text, View} from "react-native";
import {Color} from "../../constant/color";

export default function NormalText({style, text}) {
    return (
        <Text style={{...styles.text, ...style}}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: Color.text
    },
});