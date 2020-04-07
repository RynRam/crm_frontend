import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [ip, setIp] = useState('');
    const [database, setDatabase] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   return (
        <>
            <Spacer>
            <Image
                style={styles.image}
                source={{
                uri: 'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Helix/helixsoftware.png',
                }}
            />
            <Text  style={styles.headerText} h4>{headerText}</Text>
            </Spacer>
           
            <Input label="IP Address" 
                placeholder="IP Address" 
                autoCapitalize="none"
                autoCorrect={false}
                value={ip} 
                onChangeText={setIp}
                labelStyle={styles.label}/>
            <Spacer/>
            <Input label="Database" 
                placeholder="Database" 
                autoCapitalize="none"
                autoCorrect={false}
                value={database} 
                onChangeText={setDatabase}
                labelStyle={styles.label}/>
            <Spacer/>
            <Input label="Email" 
                placeholder="Email" 
                autoCapitalize="none"
                autoCorrect={false}
                value={email} 
                onChangeText={setEmail}
                labelStyle={styles.label}/>
            <Spacer/>
            <Input label="Password" 
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false} 
                value={password} 
                onChangeText={setPassword}
                labelStyle={styles.label}/>
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ ip, database,  email, password })} buttonStyle={{ backgroundColor: '#102E52', marginVertical: 15}}/>
                { errorMessage ?  <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </Spacer>
            
        </>
   );
};

const styles = StyleSheet.create({
    headerText:{
        textAlign:'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    errorMessage:{
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
        textAlign:'center',
        backgroundColor: 'red',
        borderRadius: 10,
        height: 25,
    },
    image :{
        width: '100%',
        height: 40,
        marginBottom: 15,
        paddingHorizontal : 15
    },
    label: {
        color: 'black'
    }
});

export default AuthForm;