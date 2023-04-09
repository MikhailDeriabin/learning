import {Pressable, StyleSheet, Text, View} from "react-native";

export default function GoalItem(props) {
    const {id, text, deleteGoal} = props;

    return (
        <View style={styles.goalWrapper}>
            <Pressable
                android_ripple={{color: 'red'}}
                onPress={deleteGoal.bind(this, id)}
                /* For ios there is no ripple option, so u need to implement it like that: style={ ({pressed}) => pressed && styles.pressedItem }*/
            >
                    <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalWrapper: {
        marginBottom: 5,
        backgroundColor: 'grey',
        borderRadius: 5
    },

    pressedItem: {
        backgroundColor: 'red'
    },

    goalText: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        color: 'white'
    }
});