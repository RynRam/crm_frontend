import React, {useState, useContext} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
const SubAccountForm  = ({ onSubmit, defaultValues }) => {
    const [subAcct,setSubAcct] = useState(defaultValues.subAcct);
    const [subDesc,setSubDesc] = useState(defaultValues.subDesc);
    const [subGroup,setSubGroup] = useState(defaultValues.subGroup);
    const [active,setActive] = useState(defaultValues.active);

    return (
        <View>
            <Text style={styles.label}> Sub-Account </Text>
            <TextInput style={styles.input} value={subAcct} onChangeText={(subAcc)=> setSubAcct(subAcc)}/>
            <Text style={styles.label}> Sub-Description </Text>
            <TextInput  style={styles.input} value={subDesc} onChangeText={(subDes)=> setSubDesc(subDes)} />
            <Text style={styles.label}> Sub-Group </Text>
            <TextInput style={styles.input} value={subGroup} onChangeText={(subGrp)=> setSubGroup(subGrp)}/>
            <Text style={styles.label}> Active </Text>
            <TextInput  style={styles.input} value={active} onChangeText={(active)=> setActive(active)} />
            <Button title="Save" onPress={()=> onSubmit(subAcct,subDesc,subGroup,active)} />
        </View>
    )   
}

SubAccountForm.defaultProps = {
    defaultValues: {
        subAcct: '',
        subDesc: '',
        subGroup: '',
        active: '',
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    label : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default SubAccountForm