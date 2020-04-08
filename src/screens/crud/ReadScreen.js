import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import { Feather } from '@expo/vector-icons';

//const globalOpenWindow = null;

const ReadScreen = ({ navigation }) => {
    const { state, deleteSubAccount } = useContext(SubAccountContext)
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(subaccount) => subaccount.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity  onPress={()=> navigation.navigate('SubAccountShow',{ id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.subAcct}</Text>
                                <Text style={styles.title}>{item.subDesc}</Text>
                                <Text style={styles.title}>{item.subGroup}</Text>
                                <Text style={styles.title}>{item.active}</Text>
                                <TouchableOpacity onPress={() => deleteSubAccount(item.id)}>
                                    <Feather name="trash" style={styles.icons} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

ReadScreen.navigationOptions = ({ navigation }) => {
    // const { openwindow } = useContext(SubAccountContext);
    return {
     headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('SubAccountCreate')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
    ) 
 }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    title: {
        fontSize: 18
    },
    icons: {
        fontSize: 24
    }

})

export default ReadScreen