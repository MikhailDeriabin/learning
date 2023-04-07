import {Pressable, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../constans/colors";

export default function OutlinedButton({onPress, icon, children}) {
    return(
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} onPress={onPress} size={18} color={Colors.primary500} />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500
    },

    pressed: {
        opacity: 0.7
    },

    icon: {
        marginRight: 5
    },

    text: {
        color: Colors.primary500
    }
});