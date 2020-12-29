import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";


const TrackListScreen = props => {

    const { state, fetchTracks } = useContext(TrackContext);



    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks} />

            <Text>Track List Screen</Text>
            <FlatList data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => {
                        props.navigation.navigate('TracksDetails', { _id: item._id });
                    }}>
                        <ListItem>
                            <ListItem.Title>
                                {item.name}

                            </ListItem.Title>
                            <ListItem.Chevron />

                        </ListItem>
                    </TouchableOpacity>
                }}
            />

        </View >
    );
}

const styles = StyleSheet.create({});

export default TrackListScreen;