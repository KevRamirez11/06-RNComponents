import React, { useState, useContext } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { ThemeContext } from '../context/ThemeContext';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);
    const {theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='ModalScreen'/>
        
        <Button 
            title='Abrir modal'
            onPress={() => setIsVisible(true)}
        />

        <Modal
            animationType='slide'
            visible={isVisible}
            transparent={true}
        >
            <View 
                style={{ 
                    flex: 1, 
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent:'center',
                    alignItems:'center' 
            }}>
                
                <View style={{
                    width: 200,
                    height: 200,
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height:10
                    },
                    shadowOpacity: 0.25,
                    elevation: 10,
                    borderRadius: 8
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Modal</Text>
                    <Text style={{
                        fontSize: 16,
                        marginVertical: 10
                    }}>Texto del modal</Text>
                    <Button
                        title='Cerrar'
                        onPress={() => setIsVisible(false)}
                    />
                </View>
            </View>

        </Modal>
    </View>
  )
}
