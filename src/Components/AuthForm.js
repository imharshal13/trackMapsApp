import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const AuthForm = props => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3>{props.headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {props.errorMessage ? (
                <Text style={styles.errorMessage}>{props.errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    title={props.submitButtonText}
                    onPress={() => props.onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});


export default AuthForm;