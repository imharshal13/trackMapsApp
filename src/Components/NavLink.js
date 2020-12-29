import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = props => {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    {props.text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        alignSelf: 'center'
    },
})

export default withNavigation(NavLink);

