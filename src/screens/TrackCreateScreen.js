//import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync,  Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';


const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try{
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, location => {
                addLocation(location);
            });
        }catch(error){
            console.log(error);
            setErr(error);
        }
    }

    useEffect(() => {
        startWatching();
    },[])

    return(
        <>
        <SafeAreaView forceInset={{ top: 'always'}}>
        <Text h2> Track Create Screen </Text>
        <Map />
        { err ? <Text> Please enable location services </Text> : null }
        </SafeAreaView>
        </>
    ); 
    
    
};

const styles =  StyleSheet.create({
    
});

export default TrackCreateScreen;