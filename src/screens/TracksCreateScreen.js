import React, { useCallback, useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import { Text } from "react-native-elements";
import Map from '../Components/Map';
import useLocation from "../Hooks/useLocation";
import { withNavigation, withNavigationFocus } from "react-navigation";
import TrackForm from "../context/TrackForm";
import { State } from "react-native-gesture-handler";


const TracksCreateScreen = props => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording)
    }, [state.recording])
    const [mapErr] = useLocation(props.isFocused || state.recording, callback);




    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>TracksCreateScreen</Text>
            <Map />
            {mapErr ? <Text>Please Accept Loction Services </Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TracksCreateScreen);

// props.isFocused => given true when component is focused and false on foucus out and it will br accessed by wrapping component withNavigationFocus(TracksCreateScreen).