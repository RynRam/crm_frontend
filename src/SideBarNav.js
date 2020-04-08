//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Account from './screens/AccountScreen';
import DashBoards from './screens/DashBoardsScreen';
import  ReadScreen from './screens/crud/ReadScreen';
import CreateScreen from './screens/crud/CreateScreen';
// import Screen3 from './pages/Screen3';

const color = '#9acd32';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}



const DashBoards_StackNavigator = createStackNavigator({
  //All the screen from the DashBoards will be indexed here
  First: {
    screen: DashBoards,
    navigationOptions: ({ navigation }) => ({
      title: 'Dash Board',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: color
      },
      headerTintColor: '#fff'
    }),
  },
});

const Account_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Account,
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: color,
      },
      headerTintColor: '#fff'
    }),
  },
});

const ReadScreen_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Third: {
    screen: ReadScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'SubAccount',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: color,
      },
      headerTintColor: '#fff'
    })
  }
},);



const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  DashBoards: {
    //Title
    screen: DashBoards_StackNavigator,

    navigationOptions: {
      drawerLabel: 'Dash Board'
    }
  },
  Account: {
    //Title
    screen: Account_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Account',
    }
  }
  ,
  ReadScreen: {
    //Title
    screen: ReadScreen_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sub Account',
    },
  }
});



export default createAppContainer(DrawerNavigatorExample);