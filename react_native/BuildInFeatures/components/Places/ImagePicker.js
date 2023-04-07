import {Alert, Button, Image, StyleSheet, Text, View} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker";
import {useState} from "react";
import {Colors} from "../../constans/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker() {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [takenImageUri, setTakenImageUri] = useState(null);
    
    async function verifyCameraPermission() {
        if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResp = await requestPermission();
            return permissionResp.granted;
        }

        if(cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert('No permission', 'Sowwy, but you did not provide camera permission');
            return false;
        }

        if(cameraPermissionInformation.status === PermissionStatus.GRANTED)
            return true;
    }

    async function onTakeImageButton() {
        const hasPermission = await verifyCameraPermission();

        if(!hasPermission)
            return;

        const image = await launchCameraAsync({allowsEditing: true, aspect: [16,9], quality: 0.5});

        if(image && image.assets[0] && image.assets[0].uri)
            setTakenImageUri(image.assets[0].uri);
    }

    let imagePreview = <Text>No image taken yet.</Text>;
    if(takenImageUri)
        imagePreview = <Image style={styles.image} source={{uri: takenImageUri}}/>

    return (
        <View>
            <View style={styles.imageWrapper}>
                {imagePreview}
            </View>
            <OutlinedButton onPress={onTakeImageButton} icon='camera'>Take a photo</OutlinedButton>
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrapper: {
        width: '100%',
        height: 250,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Colors.primary100
    },

    image: {
        width: 250,
        height: 250
    }
});