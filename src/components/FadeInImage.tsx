import React, { useState, useContext } from 'react'
import { UseAnimation } from '../hooks/useAnimation'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ( { uri, style }: Props ) => {

    const {opacity, fadeIn} = UseAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const { theme: {colors} } = useContext(ThemeContext)

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {
            isLoading && <ActivityIndicator style={{
                                                        position: 'absolute'
                                                    }}
                                            color={colors.primary} 
                                            size={30} />
        }
        <Animated.Image 
            source={{ uri }}
            onLoadEnd={() => finishLoading()}
            style={{
                ...style as any,
                opacity
            }}
        />
    </View>
    
  )
}
