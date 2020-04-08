import React, {useContext, } from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext'
import SubAccountForm from '../../components/SubAccountForm';
const EditScreen  = ({ navigation }) => {
    const { state, editSubAccount } = useContext(SubAccountContext)
    const id = navigation.getParam('id')
    const subAccount = state.find((data) => data.id === id)
    return <SubAccountForm 
    onSubmit={(subAcct, subDesc, subGroup, active)=> editSubAccount(id,subAcct,subDesc,subGroup, active,() => navigation.pop())}
    defaultValues={{ subAcct: subAccount.subAcct, subDesc: subAccount.subDesc, subGroup: subAccount.subGroup, active: subAccount.active}}
    />

}

const styles = StyleSheet.create({})

export default EditScreen