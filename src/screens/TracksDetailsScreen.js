import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";


const TracksDetailsScreen = props => {
    const _id = props.navigation.getParam('_id');
    const { state } = useContext(TrackContext);
    const track = state.find(t => t._id === _id);
    const initalCoords = track.locations[0].coords;

    return (
        <View>
            <Text>{track.name}</Text>
            <MapView initialRegion={{
                ...initalCoords,
                longitudeDelta: 0.01,
                latitudeDelta: 0.01
            }}
                style={styles.map}>
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    );
}



const styles = StyleSheet.create({

    map: {
        marginTop: 40,
        height: "70%",
        width: '90%',
        alignSelf: 'center'
    }
});

export default TracksDetailsScreen;