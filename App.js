import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import {COLORS,SIZES } from './constants'
import { StatusBar } from 'expo-status-bar';
import BottomTabNavigation from './navigation/BottomTabNavigation'

/*nous allons utiliser Stack  pour gérer
  notre navigation dans notre application  */
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })
  const onLayoutRootView = useCallback(async () => {

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
   
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Bottom Navigation'
        component={BottomTabNavigation}  
        options={{headerShown:false}}    
      />
    </Stack.Navigator>
  
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  

 }
);
