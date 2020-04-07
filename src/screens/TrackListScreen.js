import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation  }) => {
    return (<>
        <Text style={{ fontSize: 48, fontWeight: 'bold' }}> Track List Screen </Text>
        <Button title ="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}></Button>
        </>
    );

};

const styles =  StyleSheet.create({});

export default TrackListScreen;