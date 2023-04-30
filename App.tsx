import 'react-native-gesture-handler';


import React from 'react'
import { HomeScreen } from './src/screens/HomeScreen';
// import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/ThemeContext';

// const customTheme: Theme = {
//     dark: true,
//     colors: {
//       ...DefaultTheme.colors
//       // primary: 'string',
//       // background: string,
//       // card: string,
//       // text: string,
//       // border: string,
//       // notification: string,
//     }
// }

const App = () => {
  return (
    <AppState>
      {/* <NavigationContainer> */}
        <Navigator/>
      {/* </NavigationContainer> */}
    </AppState>
    
  )
};

const AppState = ({children}: any) => {
  return(
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;
