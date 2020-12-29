import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import { Context as AuthContext } from "../context/authContext";


const SigninScreen = props => {
    const { navigation } = props.navigation;
    const { state, signin, clearErrorMessage } = useContext(AuthContext)
    return (
        <SafeAreaView forseInset={{ top: 'always' }}>
            <View style={styles.container} >
                <NavigationEvents onWillFocus={clearErrorMessage} />
                <AuthForm
                    headerText="Sign in for Your Account"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign In"
                    onSubmit={signin} // see ses. at boottom
                />
                <NavLink
                    text='Already have a Member ? Sign Up'
                    routeName='SignUp' />
            </View>
        </SafeAreaView>
    );
}

SigninScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        marginBottom: 250,
    },
    link: {
        color: 'blue',
    },
});


export default SigninScreen;