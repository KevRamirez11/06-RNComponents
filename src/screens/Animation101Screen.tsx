import React, {  useContext } from 'react'
import { Animated, StyleSheet, View, Button, Easing } from 'react-native'
import { UseAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/ThemeContext';

export const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = UseAnimation();
  const {theme: {colors}} = useContext(ThemeContext)

  return (
    <View style={ styles.container }>
        
        <Animated.View style={{
              ...styles.purpleBox,
              opacity,
              transform: [{
                translateY: position
              }],
              }} />

        <Button 
            title="FadeIn"
            color={colors.primary}
            onPress={ () => {
              fadeIn();
              startMovingPosition()
            } }
        />
        <Button 
            title="FadeOut"
            color={colors.primary}
            onPress={ fadeOut }
        />
      
    </View>
  )
}


const styles = StyleSheet.create({

    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        marginVertical: 10
    }

});