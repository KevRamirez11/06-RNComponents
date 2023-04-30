import React, { useContext } from 'react'
import { MenuItem } from '../interfaces/appInterfaces'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';


import { ThemeContext } from '../context/ThemeContext';


interface Props {
    menuItem: MenuItem
}


export const FlatListMenuItem = ( { menuItem }: Props ) => {

    const navigation = useNavigation()
    const { theme: {colors}} = useContext(ThemeContext);
    

  return (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress={() => navigation.navigate( menuItem.component as any )}
    >
        <View style={ styles.container }>
            <Icon 
                name={ menuItem.icon }
                color={colors.primary}
                size={23} />

            <Text style={{color: colors.primary}}> {menuItem.name}</Text>


            {/* Componente utilizado para generar espacios de forma dinamica y respeta los otros componentes */}
            <View style={{ flex: 1 }}/>

            <Icon 
                name={ 'chevron-forward-outline' }
                color={colors.primary}
                size={23} />
        </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
})
