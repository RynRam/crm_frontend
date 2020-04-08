import React, {useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext'
import { EvilIcons } from '@expo/vector-icons'
const ShowScreen  = ({navigation}) => {

    const { state } = useContext(SubAccountContext)
    const id = navigation.getParam('id');
    const subAccounts = state.find(
        (subAccount) => subAccount.id == id )
    return (
        <View>
            <Text> {subAccounts.subAcct} </Text>
            <Text> {subAccounts.subDesc} </Text>
            <Text> {subAccounts.subGroup} </Text>
            <Text> {subAccounts.active} </Text>
        </View>
    )   
}
ShowScreen.navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id');
    return {
        headerRight: () => (
           <TouchableOpacity onPress={() => navigation.navigate('SubAccountEdit',{ id: id })}>
               <EvilIcons name="pencil" size={30} />
           </TouchableOpacity>
        ) 
    }
   }

const styles = StyleSheet.create({})

export default ShowScreen