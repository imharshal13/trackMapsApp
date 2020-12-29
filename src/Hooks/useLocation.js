import React, { useEffect, useState } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import { call } from 'react-native-reanimated';

export default (trackUser, callback) => {
    const [mapErr, setMapErr] = useState(null);
    let subscriber;
    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
            subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                callback
                // (location) => {
                //     callback();
                //     // addLocation(location);
                // }
            );
        } catch (e) {
            setMapErr(e);
        }
    };

    useEffect(() => {
        if (trackUser) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
                subscriber = null;
            };

        };

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };

    }, [trackUser, callback]);

    return [mapErr];
};