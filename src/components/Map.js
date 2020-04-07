import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);
    //console.log(state);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{ marginTop: 200 }}/>;
    }

    //latitude: 14.6548153,
    //longitude: 121.0161022,
    
    return (
        <MapView
            style={styles.mapStyle}
            initialRegion={{
                ...addCurrentLocation,
                latitudeDelta: 0.01,
                longitudeDelta:0.01
            }}
        > 
        </MapView>
    );
    

}

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export default Map;