import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/authContext';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return(
        <>
            <SafeAreaView forceInset={{ top: 'always'}}>
                <Text style={{ fontSize: 48, fontWeight: 'bold' }}> Account Screen </Text>
                
                
                <Spacer>
                    <Button title="Sign Out" onPress={signout}/>
                </Spacer>
            </SafeAreaView>
            
        </>

    );
    
    
};

const styles =  StyleSheet.create({});

export default AccountScreen;