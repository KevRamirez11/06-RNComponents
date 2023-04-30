import React, { useState, useContext } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/ThemeContext';

export const SwitchScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext);

    const [state, setState] = useState({
        isActive: true,
        isHungry: true,
        isHappy: true
    });

    const {isActive, isHungry, isHappy} = state;

    const onChange = (value: boolean, field: keyof typeof state ) => {
        setState({
            ...state,
            [field]: value
        })
    };

  return (
    <View style={{marginHorizontal: 20 }}>

        <HeaderTitle title='Switches' />

        <View style={ styles.switchRow }>
            <Text style={ {
                ...styles.switchText,
                color: colors.primary} }>IsActive</Text>
            <CustomSwitch isOn={ isActive } onChange={ (value) => onChange( value, 'isActive' ) }/>
        </View>

        <View style={ styles.switchRow }>
            <Text style={ {
                ...styles.switchText,
                color: colors.primary} }>IsHungry</Text>
            <CustomSwitch isOn={ isHungry } onChange={ (value) => onChange( value, 'isHungry' ) }/>
        </View>

        <View style={ styles.switchRow }>
            <Text style={ {
                ...styles.switchText,
                color: colors.primary} }>IsHappy</Text>
            <CustomSwitch isOn={ isHappy } onChange={ (value) => onChange( value, 'isHappy' ) }/>
        </View>


        <Text style={ {
                ...styles.switchText,
                color: colors.primary} }>
            {JSON.stringify( state, null, 5 )}
        </Text>
        
    </View>
  )
}


const styles = StyleSheet.create({
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6
    },
    switchText: {
        fontSize: 26
    }
})