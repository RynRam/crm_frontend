import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/authContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ( { navigation } ) => {
    const { state, signin, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    return (
        
        <View style={styles.container}>
            <SafeAreaProvider>
            <NavigationEvents 
                onWillBlur={ clearErrorMessage }
            />
            <AuthForm
                headerText = "Helix CRM Sign In"
                errorMessage = {state.errorMessage}
                submitButtonText = "Sign in"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Dont have an account? Sign up instead!"/>
                </SafeAreaProvider>
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        // ,
        // marginBottom: 250
    }
});

export default SigninScreen;