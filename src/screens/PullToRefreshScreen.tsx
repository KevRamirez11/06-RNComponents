import React, {useContext, useState} from 'react'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { ScrollView, RefreshControl, View } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'

export const PullToRefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const {theme: {colors}} = useContext(ThemeContext);

  const onRefres = () => {
    setRefreshing(true);
    setTimeout(() =>  {
      setRefreshing(false);
    }, 3500);
  } 

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={ refreshing }
          onRefresh={ onRefres }
          progressViewOffset={40}
          progressBackgroundColor={colors.background}
          colors={[colors.primary, colors.notification]}
          style={{ backgroundColor: colors.primary}}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='PullToRefreshScreen'/>


          
      </View>
    </ScrollView>
    
  )
}
