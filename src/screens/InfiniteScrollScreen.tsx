import React, { useState, useContext } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/ThemeContext';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
  const {theme: {colors}} = useContext(ThemeContext)

  const RenderItem = ( number: number) => {
    return(

      <FadeInImage
          uri={ `https://picsum.photos/id/${number}/500/400` } 
          style={{
              width: "100%",
              height: 400,
              borderRadius: 8
          }}    
      />
    //   <Image 
    //     source={ {uri: `https://picsum.photos/id/${number}/500/400`} }
    //     style={{ 
    //         width: '100%',
    //         height: 400
    //      }}
    //   />
    );
  }

  const loadMore = () => {

    const newArray: number[] = [];
    for (let i = 0; i < 5; i++){
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  }

  return (
    <View >
        <FlatList 
          data={numbers}
          keyExtractor={ (item) => item.toString()}
          renderItem={({item}) => RenderItem(item)}

          ListHeaderComponent={ <HeaderTitle title='Infinite Scroll'/> }

          onEndReached={ loadMore }
          onEndReachedThreshold={0.5}

          ListFooterComponent={() => (
            <View style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ActivityIndicator size={20} color={colors.primary} />
            </View>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'orange',
    height: 150,
    fontSize: 18,
    fontWeight: 'bold'
  }
})