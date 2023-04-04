import {Button, TextInput, View, StyleSheet, Modal} from "react-native";
import {useState} from "react";

export default function GoalInput(props) {
    const {isVisible, addNewGoal, closeModal} = props;
    const [typedGoal, setTypedGoal] = useState('');

    function handleInputChange(text) {
        setTypedGoal(text);
    }
    function addGoal() {
        if(typedGoal !== ''){
            const newGoal = {
                text: typedGoal,
                id: Math.random().toString() //Better than nothing
            }
            addNewGoal(newGoal);
            setTypedGoal('');
            closeModal();
        }
    }

    function cancel() {
        closeModal();
        setTypedGoal('');
    }

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.goalInput}>
                    <TextInput
                        style={styles.goalTextInput}
                        placeholder="Type your goal"
                        onChangeText={handleInputChange}
                    />
                    <Button
                        title="add"
                        onPress={addGoal}
                    />
                </View>
                <View style={styles.modalMenu}>
                    <Button title="cancel" onPress={cancel}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center'
    },

    goalInput: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 30
    },

    goalTextInput: {
        minWidth: '70%',
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 10
    },

    modalMenu: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: 'flex-end',
        minWidth: '70%',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});