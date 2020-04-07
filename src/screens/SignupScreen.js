import React, { useContext } from 'react';
import { View, StyleSheet, } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/authContext';
import { NavigationEvents } from 'react-navigation';


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (

        <SafeAreaProvider>
            <View style={styles.container}>
                <NavigationEvents
                    onWillBlur={clearErrorMessage}
                />
                <AuthForm
                    headerText="Sign Up"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign up"
                    onSubmit={signup}
                />
                <NavLink
                    routeName="Signin"
                    text="Already have an account? Sign in instead!"
                />
            </View>
        </SafeAreaProvider>

    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        // ,
        // marginBottom: 250
    }
});

export default SignupScreen;

/*
<Text style={{ fontSize: 48, fontWeight: 'bold' }}> Signup Screen </Text>
        <Button title="Go to Signin" onPress={()=> navigation.navigate('Signin')}/>
        <Button title="Go to Main" onPress={()=> navigation.navigate('mainFlow')}/>
*/