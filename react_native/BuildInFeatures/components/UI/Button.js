import {Pressable, Text, StyleSheet} from "react-native";
import {Colors} from "../../constans/colors";

export default function Button({onPress, children}) {
    return(
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        borderRadius: 4
    },

    pressed: {
        opacity: 0.7
    },

    text: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.primary50
    }
});