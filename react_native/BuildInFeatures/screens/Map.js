import MapView, {Marker} from 'react-native-maps';
import {Alert, StyleSheet} from "react-native";
import {useCallback, useLayoutEffect, useState} from "react";
import IconButton from "../components/UI/IconButton";

//navigation comes from App.js, from Stack.Screen
export default function Map({navigation}) {
    const [chosenLocation, setChosenLocation] = useState(null);
    const region = {
        latitude: 60.220281,
        longitude: 24.809743,
        latitudeDelta: 0.1,
        longitudeDelta: 0.05
    }

    function chooseLocation(event) {
        const {latitude, longitude} = event.nativeEvent.coordinate;
        setChosenLocation({lat: latitude, lon: longitude});
    }

    //useCallback(): To avoid infinite loop in useEffect
    //and to improve performance, since it will be re-rendered only when [navigation, chosenLocation] changes
    const saveChosenLocation = useCallback(() => {
        if(!chosenLocation){
            Alert.alert('No location', 'Please choose location on map first');
            return;
        }

        navigation.navigate('AddPlace', {chosenLocation});
    }, [navigation, chosenLocation]);

    //Execute code before screen rendering. Add save button
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton
                    icon='save'
                    size={24}
                    color={tintColor}
                    onPress={saveChosenLocation}
                />
            )
        });
    }, [navigation, saveChosenLocation]);

    return(
        <MapView
            initialRegion={region}
            style={styles.map}
            onPress={chooseLocation}
        >
            {chosenLocation && chosenLocation.lat && chosenLocation.lon &&
                (
                    <Marker coordinate={{latitude: chosenLocation.lat, longitude: chosenLocation.lon}}/>
                )
            }
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});