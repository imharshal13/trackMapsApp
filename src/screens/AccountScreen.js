import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";


const AccountScreen = props => {
    const { signout } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>AccountScreen</Text>
            <Button title='Logout' onPress={signout} />

        </View>

    );
}

const styles = StyleSheet.create({
    button: { margin: 100 },
    container: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: "100%"
    }
});

export default AccountScreen;