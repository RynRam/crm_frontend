import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext'
import SubAccountForm from '../../components/SubAccountForm';
const CreateScreen  = ({navigation}) => {

    const { addSubAccount } = useContext(SubAccountContext)
    return <SubAccountForm 
        onSubmit={(subAcct, subDesc, subGroup, active)=>addSubAccount(subAcct, subDesc, subGroup, active, () => navigation.navigate('SubAccountIndex'))}
    />
  
}

const styles = StyleSheet.create({})

export default CreateScreen