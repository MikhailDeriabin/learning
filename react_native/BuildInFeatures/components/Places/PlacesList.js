import {FlatList, StyleSheet, Text, View} from "react-native";
import PlaceItem from "./PlaceItem";
import {Colors} from "../../constans/colors";

export default function PlacesList({places}) {
    if(!places || places.left === 0){
        return (
            <View style={styles.fallbackWrapper}>
                <Text style={styles.fallbackText}>No places found</Text>
            </View>
        );
    }

    return (
        <FlatList
            keyExtractor={(place) => place.id}
            data={places}
            renderItem={
                (place) => {
                    return <PlaceItem place={place}/>
                }
            }
        />
    );
}

const styles = StyleSheet.create({
    fallbackWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 15,
        color: Colors.primary200
    }
});