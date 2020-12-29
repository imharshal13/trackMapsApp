import React, { useContext } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = props => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    };


    return (
        <>

            <MapView style={styles.map}
                initialRegion={{
                    // this property responible for when the map initial loads which region is to be renderd.
                    ...currentLocation.coords,
                    longitude: 75.89728459629296,
                    latitude: 22.74196794894493,
                    longitudeDelta: .01,
                    latitudeDelta: .01
                }}

            // region={{
            //     // indential to inital region
            //     ...currentLocation.coords,
            //     longitudeDelta: .001,
            //     latitudeDelta: .001
            // }}
            >
                <Circle center={currentLocation.coords}
                    radius={10}
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                />
                <Polyline coordinates={locations.map(loc => loc.coords)} />
            </MapView>
            <View>

            </View>
        </>
    )

};

const styles = StyleSheet.create({
    map: {
        height: '70%',
        width: '90%',
        margin: 10,
        alignSelf: 'center'
    }
});

export default Map;




// let points = [];
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         points.push({
//             latitude: 22.741193498578987 + i * 0.001,
//             longitude: 75.897524094834 + i * 0.001

//         });
//     }

// }