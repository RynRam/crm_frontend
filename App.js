import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider, Provider } from './src/context/authContext';
import { setNavigator } from './src/navigationRef';
import ResolvedAuthScreen from './src/screens/ResolvedAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';

import { Provider as DataProvider } from './src/context/SubAccountContext';
import ShowScreen from './src/screens/crud/ShowScreen';
import CreateScreen from './src/screens/crud/CreateScreen';
import EditScreen from './src/screens/crud/EditScreen';
import ReadScreen from './src/screens/crud/ReadScreen';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolvedAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
    
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      SubAccountIndex : ReadScreen ,
      SubAccountShow : ShowScreen,
      SubAccountEdit : EditScreen,
      SubAccountCreate : CreateScreen,
      // TrackList: ReadScreen,
      // TrackDetail: TrackDetailScreen,

    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <DataProvider>
          <App ref ={ navigator => { setNavigator(navigator); }}/>
        </DataProvider>
      </AuthProvider>
    </LocationProvider>
  );
};





/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/