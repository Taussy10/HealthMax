import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BaymaxScreen from '../screens/BaymaxScreen';
import MeditationPlayer from '../screens/MeditationPlayer';






type RootStackParamList = {
  HomeScreen: undefined;   // If the screen doesn't take any parameters
  BaymaxScreen: undefined; // If BaymaxScreen doesn't have parameters
};




// It's a global stack that can be used anywhere that's why  
// wrote above
const Stack = createNativeStackNavigator()

// FC means fucntional componnets:
const Navigation:FC = () => {
  return (
    

    // initialRouteName='BaymaxScreen'  alwasy remeber this prop will help you a lot
 <Stack.Navigator screenOptions={{headerShown: false} } initialRouteName='SplashScreen' > 
    <Stack.Screen name='SplashScreen' component={SplashScreen} 
    options={{animation: 'fade'} } 
    />
    <Stack.Screen name='BaymaxScreen' component={BaymaxScreen}  />
    <Stack.Screen name='MeditationPlayer' component={MeditationPlayer}/>
 </Stack.Navigator>
//  </NavigationContainer>

  )
}

export default Navigation

const styles = StyleSheet.create({})