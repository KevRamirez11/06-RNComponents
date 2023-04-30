import React, {useContext} from 'react'
import { View, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, StyleSheet  } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/ThemeContext';

export const TextInputScreen = () => {

    const {theme: {colors, dividerColor}} = useContext(ThemeContext);

    const { form, onChange, isSuscribed} = useForm ({ 
        name: '',
        email: '',
        phone: '',
        mascota: '',
        isSuscribed: false
    });

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
    >
        <ScrollView>
            <View style={styles.globalMargin}>
                <HeaderTitle title='TextInputs'/>

                <TextInput 
                    style= {{
                        ...stylesScren.inputStyle,
                        borderColor: colors.border,
                        color: colors.text,
                        
                            }}

                    placeholder='Ingrese su nombre'
                    autoCorrect={false}
                    autoCapitalize='words'
                    onChangeText={ (value) => onChange(value, 'name')}
                    placeholderTextColor={dividerColor}
                />

                <TextInput 
                    style= {{
                        ...stylesScren.inputStyle,
                        color: colors.text,
                        borderColor: colors.border
                            }}
                    placeholder='Ingrese su email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={ (value) => onChange(value, 'email')}
                    keyboardType="email-address"
                    placeholderTextColor={dividerColor}

                />

                <TextInput 
                    style= {{
                        ...stylesScren.inputStyle,
                        color: colors.text,
                        borderColor: colors.border
                            }}
                    placeholder='Ingrese su telefono'
                    onChangeText={ (value) => onChange(value, 'phone')}
                    keyboardType="number-pad"
                    placeholderTextColor={dividerColor}

                />
                
                <TextInput 
                    style= {{
                        ...stylesScren.inputStyle,
                        color: colors.text,
                        borderColor: colors.border
                            }}
                    placeholder='Ingrese su mascota'
                    autoCorrect={false}
                    autoCapitalize='words'
                    onChangeText={ (value) => onChange(value, 'mascota')}
                    placeholderTextColor={dividerColor}

                />
                <View style={ stylesScren.switchRow }>
                    <Text style={ {
                        ...stylesScren.switchText,
                        color: colors.primary} }>Suscribed</Text>
                    <CustomSwitch isOn={ isSuscribed } onChange={ (value) => onChange( value, 'isSuscribed' ) }/>
                </View>

                <Text style={{
                    color: colors.primary,
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>{ JSON.stringify( form, null, 3 ) }</Text>

            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesScren = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6
    },
    switchText: {
        fontSize: 24
    }
})
