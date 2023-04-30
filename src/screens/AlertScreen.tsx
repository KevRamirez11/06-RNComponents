import React from 'react'
import { Button, View, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Titulo de alerta',
            'Este es el mensaje de la alerta',
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancelar seleccionado"),
                    style: 'destructive'
                },
                {
                    text: "Ok", onPress: () => console.log("Ok seleccionado")
                }
            ],
            {
                cancelable: true
            }
        )
    }


  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alertas' />

        <Button
            title='Mostrar alerta'
            onPress={ showAlert }
        />
    </View>
  )
}
