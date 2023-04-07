import {Image, Pressable, StyleSheet, Text} from "react-native";

export default function PlaceItem({place, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <Image source={place.imageUri}></Image>
            <Text>TITLE {place.title}</Text>
            <Text>ADDRESS {place.address}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({

});