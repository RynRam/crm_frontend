import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return(
        <>
            <TouchableOpacity onPress={()=>navigation.navigate({routeName})}>
                <Text style={styles.linktext}>
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    linktext:{
        marginLeft: 15,
        //marginTop: 5,
        color: 'blue'
    }
});

export default withNavigation(NavLink);