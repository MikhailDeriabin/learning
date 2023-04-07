import {Alert, Image, StyleSheet, Text, View} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constans/colors";
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from "expo-location";
import {useEffect, useState} from "react";
import {getMapPreview} from "../../util/location";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";

export default function LocationPicker() {
    const navigation = useNavigation();
    const route = useRoute();

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [chosenLocation, setChosenLocation] = useState(null);
    const isFocused = useIsFocused();

    //Update map preview if user choose location on map
    useEffect(() => {
        //If component is in focus
        if(isFocused){
            //Get chosen location from Map screen if exists
            const userChosenLocation = route.params && route.params.chosenLocation;

            if(userChosenLocation)
                setChosenLocation(userChosenLocation);
        }

    }, [route, isFocused]);

    async function verifyPermission() {
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResp = await requestPermission();
            return permissionResp.granted;
        }

        if(locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert('No permission', 'Sowwy, but you did not provided permission for using your location');
            return false;
        }

        if(locationPermissionInformation.status === PermissionStatus.GRANTED)
            return true;
    }

    async function locate() {
        const hasPermission = await verifyPermission();

        if(!hasPermission)
            return;

        const location = await getCurrentPositionAsync();
        if(location && location.coords)
            setChosenLocation({lat: location.coords.latitude, lon: location.coords.longitude});
    }

    function chooseOnMap() {
        navigation.navigate('Map');
    }

    let mapPreview = <Text>No location picked yet</Text>
    if(chosenLocation)
        mapPreview = <Image style={styles.image} source={{uri: getMapPreview(chosenLocation)}} />

    return(
        <View>
            <View style={styles.mapPreview}>
                {mapPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon='location' onPress={locate}>Locate me</OutlinedButton>
                <OutlinedButton icon='map' onPress={chooseOnMap}>Choose on map</OutlinedButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Colors.primary100
    },

    actions: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: '100%'
    }
});