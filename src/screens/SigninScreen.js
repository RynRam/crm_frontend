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
        <SafeAreaProvider>
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={ clearErrorMessage }
            />
            <AuthForm
                headerText = "Sign In"
                errorMessage = {state.errorMessage}
                submitButtonText = "Sign in"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Dont have an account? Sign up instead!"
                />
        </View>
        </SafeAreaProvider>
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
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        // marginBottom: 250
    },
});

export default SigninScreen;