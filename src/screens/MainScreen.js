import React from 'react';
import SideBarNav from '../SideBarNav';
import SafeAreaProvider from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Button } from 'react-native';

    // <Text style={{ fontSize: 48, fontWeight: 'bold' }}> Main Screen </Text>
    // <Button title ="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}></Button>
const MainScreen = ({ navigation  }) => {
    return (<>
    <SideBarNav />

        </>
    );

};

const styles =  StyleSheet.create({});

export default MainScreen;