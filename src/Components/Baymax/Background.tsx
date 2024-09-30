import { ImageBackground, StyleSheet, Text, View ,Image } from 'react-native'
import React, { FC } from 'react'
import { screenHeight, screenWidth } from '../../utils/Scaling'
import Animated from 'react-native-reanimated'
// import { BlurView } from '@react-native-community/blur'



const Background:FC<{blurOpacity:any}> = ({blurOpacity}) => {
  return (
    <View style={styles.imageContainer}>
     <Image source={require("../../../assets/images/baymax.png")}
     style={styles.image}
     />
     {/* , {opacity:blurOpacity} the error is due type of blurOpacity put
     it into styles it will give error */}
  <Animated.View style={[styles.absolute , {opacity: 50} ]}>
    {/* <BlurView style={styles.absolute}
    blurType='ultraThinMaterial'
    // blurAmount={20}
    /> */}
  </Animated.View>

  {/* understand it: [for writing multiple typs of css] then {for writing inline css} */}

    </View>
  )
}

export default Background

const styles = StyleSheet.create({
  imageContainer:{
    width: screenWidth,
    height: screenHeight*1.2 ,
    position:'absolute',
    zIndex: -1,

// z index is for which will come at the top in Z direction
// -ve values will have low priority but will do same work
// https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
  },
  absolute:{
  position:'absolute',
  top:0,
  left:0,
  right:0,
  height:"100%",
  

  },
  image:{
    height: "100%",
    width:"100%",
    resizeMode: 'cover',
    bottom: -screenHeight* 0.2

  }
})