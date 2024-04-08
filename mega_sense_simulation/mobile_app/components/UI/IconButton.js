import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({wrapperStyle, textWrapperStyle, textStyle, icon, onPress, text}) {
    return (
        <Pressable
            style={({pressed}) => [styles.button, wrapperStyle, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View style={textWrapperStyle}><Text style={textStyle}>{text}</Text></View>
            <Ionicons name={icon.name} size={icon.size} color={icon.color}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    pressed: {
        opacity: 0.7
    }
});