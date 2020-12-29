import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";


const Spacer = props => {
    return (
        <View style={styles.Spacer}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    Spacer: {
        margin: 15
    },

});

export default Spacer;