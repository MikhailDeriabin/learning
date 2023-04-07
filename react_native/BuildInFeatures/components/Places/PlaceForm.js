import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {Colors} from "../../constans/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

export default function PlaceForm() {
    const [typedTitle, setTypedTitle] = useState('');

    function onChangeTitle(text) {
        setTypedTitle(text);
    }

    function savePlace() {

    }

    return(
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={onChangeTitle} value={typedTitle} />
            </View>
            <ImagePicker />
            <LocationPicker />
            <Button onPress={savePlace}>Submit</Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 10
    },

    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.primary500
    },

    input: {
        marginVertical: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        fontSize: 16,
        borderColor: Colors.primary700,
        borderWidth: 1,
        backgroundColor: Colors.primary100
    }
});