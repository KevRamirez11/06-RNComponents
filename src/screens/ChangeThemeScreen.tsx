import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/ThemeContext'

export const ChangeThemeScreen = () => {

  const { setDarkTheme, setLightTheme, theme:{colors} } = useContext( ThemeContext );

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='ChangeThemeScreen'/>
        <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={setLightTheme}
            style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center'
          }}>
              <Text style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 22
              }}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={setDarkTheme}
            style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center'
          }}>
              <Text style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 22
              }}>Dark</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
