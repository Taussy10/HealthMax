import { StyleSheet, Text, View , Image , SafeAreaView} from 'react-native'
import React, { FC , useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors , lightColors , Fonts  } from '../utils/Constants'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { screenHeight, screenWidth } from '../utils/Scaling'
import { navigate, resetAndNavigate } from '../utils/NavigationUtils'
import {  speak } from '../utils/Speak'
import { LinearGradient } from 'expo-linear-gradient'
import CustomText from '../Components/CustomComponents/CustomText'
import LottieView from 'lottie-react-native'
import { useNavigation  , NavigationProp} from '@react-navigation/native'



const bottomColors = [...lightColors].reverse()
// Hello

const SplashScreen:FC = () => {
// Properly typing the navigation object
const navigation = useNavigation();
// For two aniamtions
  // useSharedValue manages state that can drive animations.

  // Reanimated animations: take 3 things 1.useShareValue(Kinda useState hook but work on UI thread BTW we directly cahnge the state by baymaxAnimtion.something) 
  // useAnimatedValue:
  // Animated.view/Image... The part of component that you want to animate


  // So how we handled it ?

// 1. using useSharedValue put the gave the screen height 
// What is it imagine screen height 100 so here useShared valu 100*0.8 = 80
const baymaxAnimation = useSharedValue(screenHeight*0.8)
// const baymaxAnimation = useSharedValue(1)
const messageContainerAnimation = useSharedValue(screenHeight*0.8 )
// const messageContainerAnimation = useSharedValue(20 )

// 3. Launch it so that it can top of screen

const launchAnimation = async() =>{
  messageContainerAnimation.value = screenHeight*0.001 
 
  // after sometime 
  setTimeout(() => {
    baymaxAnimation.value = screenHeight*0.001   
    // after the messagge baymax and message container comes to top
    speak("Hello I'm Baymax")
  }, 500);



  setTimeout(() => {
    // navigation('BaymaxScreen')
    navigation.navigate("BaymaxScreen")
    // it will reset history of stacks so that you can't go again to splash screen 
  }, 2500);


} 

useEffect(() => {
  // initializeTtsListeners()
  launchAnimation()
}, [])

// 2. writing styles for animations by modyifing useShareValue properties.
// so screen height is 80 now put it into 1500 and 1200  and in y direction 
const baymaxStyle = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: withTiming(baymaxAnimation.value,
        {duration:1500} ) }]
        // duration for fast and slow
        // transform property use for scaling/rotating so we are usin translateY: 
    }
  })
  
  const messageContainerStyle = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: withTiming(messageContainerAnimation.value,
        {duration:1200} ) }]
    }
  })
  

  return (
    <SafeAreaView style={styles.container} >
  {/* <TouchableOpacity onPress={()=> navigate("BaymaxScreen") }> */}

   {/* There will be two animated views: for image animations and sub container  */}

    {/* For animating image */}
    <Animated.View style={[styles.imageContainer , baymaxStyle]} >
  <Image source={require('../../assets/images/launch.png')} 
  style={styles.img}
  />
</Animated.View>


    {/* </TouchableOpacity> */}
{/* For animating subcontainer */}
<Animated.View  style={[styles.gradientContainer , messageContainerStyle]}>

  {/* Why linear gradient try to remove it  */}
  <LinearGradient colors={bottomColors} style={styles.gradient} >
 {/* <View> */}


{/* sub container{Has text and animation} */}
  <View style={styles.textContainer }>


 {/* 
  <CustomText fontSize={34}  fontFamily={Fonts.Theme}  >*/}
  <CustomText fontSize= {34}   fontFamily={Fonts.Theme}  >
    Baymax
    </CustomText>
    
  <LottieView
  source={require('../../assets/animations/sync.json')}
  // eslint-disable-next-line react-native/no-inline-styles
  style={{width:280 , height:100}}
  autoPlay={true}
  loop
   />

   {/* Why color took string cause you defined it and why fontSize as variable ? cause  fontSize needs a expression
   javascript take value either as string or curly so we can't use curly cause didn't defined
   
   <CustomBanner color='red' fontSize= {50} >
    Hello 
   </CustomBanner>*/}


   <CustomText  >
   Synchronizing best configuration for you 
    </CustomText>
    
    </View>
  
 {/* </View> */}
 
  </LinearGradient>
</Animated.View>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
      flex: 1 , 
      // for top to bottom:content many from top to bottom
      justifyContent: 'center',
      // for left to right
      alignItems: 'flex-end',
      // padding: 10,
      backgroundColor: Colors.primary,
    },
    imageContainer:{
      width: screenWidth-20,
      height: screenHeight*0.5
    },
    img:{
      width: "100%",
      height: "100%",
      resizeMode:'contain'
  
    },
    gradientContainer:{
      position: "absolute",
      height: "35%", 
      width: "100%",
      bottom: 0,
  
    },
    gradient:{
    paddingTop: 0,
   height: "100%",
   width: "100%",
    },
  textContainer:{
  backgroundColor:'white',
  flex: 1,
  borderRadius: 20,
  padding: 20,
  shadowOffset:{width: 1, height:1},
  shadowOpacity: 1,
  shadowRadius: 2,
  alignItems:'center',
  shadowColor: Colors.border,
  
  }})