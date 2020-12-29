import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignUpScreen = props => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup} // see ses. at boottom

            />
            <NavLink
                text='Already have a Member ? Sign in'
                routeName='SignIn' />
        </View>

    );
}

SignUpScreen.navigationOptions = navData => {
    return {
        header: () => null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },

});


export default SignUpScreen;


/*
 onSubmit={signup} =>
 =================
So rather than putting in this big arrow function right here we could instead remove that entire arrow

function and just put in sign up like SOS that says Take a reference to the sign up function any time

the on submit propagates called inside of art form just call sign up and pass in whatever appropriate

arguments OK.

*/