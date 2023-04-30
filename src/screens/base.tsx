import React from 'react'
import { View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

export const Base = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Base'/>
        
    </View>
  )
}
