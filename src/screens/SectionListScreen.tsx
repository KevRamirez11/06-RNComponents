import React, {useContext} from 'react'
import { Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { SectionList } from 'react-native';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/ThemeContext';


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", ]
  },
  {
    casa: "Marvel Comics",
    data: [ "Antman", "Thor", "Spiderman","Ironman", ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", ]
  }
];


export const SectionListScreen = () => {

  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin,
                  flex:1}}>
        {/* <HeaderTitle title='SectionList'/> */}
        <SectionList 
            sections={ casas }
            keyExtractor={(item, index) => item + index}

            ListHeaderComponent={() => <HeaderTitle title='SectionList'/> }
            ListFooterComponent={() => <HeaderTitle title={'Total de casas: ' + casas.length} />}

            renderItem={({item}) => <Text style={{color: colors.primary}}>{item}</Text>}
            stickySectionHeadersEnabled

            renderSectionHeader={ ({section}) => (
              <View style={{backgroundColor: colors.background}}>
                <HeaderTitle title= {section.casa} />  
              </View>)}
            
            renderSectionFooter={({section}) => (
              <HeaderTitle title={'Total: ' + section.data.length} />
            )}

            SectionSeparatorComponent={() => <ItemSeparator />}
            ItemSeparatorComponent={() => <ItemSeparator />}
            
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}
