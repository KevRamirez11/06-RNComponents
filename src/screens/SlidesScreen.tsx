
import React,{ useState, useRef, useContext }  from 'react'
import { View, StyleSheet, Image, ImageSourcePropType, Text, Dimensions, SafeAreaView, TouchableOpacity, Animated,  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import { UseAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/ThemeContext';



const {height: screenHeight, width: screenWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any, any>{

}

export const SlidesScreen = ({ navigation }: Props) => {

  const {theme: {colors}} = useContext(ThemeContext)

  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);

  const {opacity, fadeIn } = UseAnimation()


  const renderItem = (item: Slide) => {
    return(
      <View 
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center'
      }}>
          <Image 
            source={item.img}
            style={{
              width: 350,
              height: 400,
              resizeMode: 'center'
            }}
          />
          <Text style={{
                ...stylesScreen.title,
                color: colors.primary}}>{item.title}</Text>
          <Text style={{
                ...stylesScreen.subTitle,
                color: colors.primary
                }}>{item.desc}</Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: 50
    }}>
        {/* <HeaderTitle title='SlidesScreen'/> */}
        <Carousel
              // ref={items }}
              data={ items}
              renderItem={ ({ item }: any) => renderItem( item) }
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout="default"
              onSnapToItem={ (index) => {
                  setActiveIndex(index);
                  if ( index === 2 ) {
                    fadeIn();
                    isVisible.current = true
                  }
              } }
            />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center'
        }}>
          <Pagination 
            dotsLength={ items.length }
            activeDotIndex={ activeIndex }
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius:10,
              backgroundColor: colors.primary
            }}
          />
          {
              isVisible && (
                <Animated.View 
                style={{
                  opacity
                  }}
                >
                  <TouchableOpacity style={{
                      flexDirection: 'row',
                      backgroundColor: colors.background,
                      width: 140,
                      height: 50,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      onPress={ () => {
                        if( isVisible.current ) {
                            navigation.navigate('HomeScreen')
                        }
                      }}
                    >
                  <Text style={{
                      fontSize: 25,
                      color: colors.primary
                  }}>
                    Entrar
                  </Text>
                  <Icon
                      name="chevron-forward-outline"
                      color="white"
                      size={30}
                  />
                  </TouchableOpacity>
                </Animated.View>
              )
          }
        </View>
        
    </SafeAreaView>
  )
}

const stylesScreen = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle:{
    fontSize: 16
  }

})
