import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [ipadd, setIpAdd] = useState('');
    const [dtbase, setDtbase] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   return (
        <>
            <Spacer>
            <Text  style={styles.headerText} h3>{headerText}</Text>
            </Spacer>
            <Input label="IP Address" 
                placeholder="IP Address" 
                autoCapitalize="none"
                autoCorrect={false}
                value={ipadd} 
                onChangeText={setIpAdd}/>
            <Spacer/>
            <Input label="Database" 
                placeholder="Database" 
                autoCapitalize="none"
                autoCorrect={false}
                value={dtbase} 
                onChangeText={setDtbase}/>
            <Spacer/>
            <Input label="Email" 
                placeholder="Email" 
                autoCapitalize="none"
                autoCorrect={false}
                value={email} 
                onChangeText={setEmail}/>
            <Spacer/>
            <Input label="Password" 
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false} 
                value={password} 
                onChangeText={setPassword}/>
            { errorMessage ?  <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })}/>
            </Spacer>
        </>
   );
};

const styles = StyleSheet.create({
    headerText:{
        textAlign:'center',
        alignSelf: 'center',
        marginTop: 20
    },
    errorMessage:{
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;