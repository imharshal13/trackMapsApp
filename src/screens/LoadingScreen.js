import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/authContext';


const LodingScreen = props => {
    const { tryLocalSignin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin();
    }, [])
    return null;
};

// coStyleSheet.create({})

export default LodingScreen;