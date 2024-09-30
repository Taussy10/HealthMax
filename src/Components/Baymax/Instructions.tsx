import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import Markdown from 'react-native-markdown-display';
import { Fonts } from '../../utils/Constants';

// Learn this thing this how we get props
// 1: make comp functional
// 2. define types
// 3. Get them
const Instructions:FC<{
  message: string,
  onCross: () => void;
  // Doesn't have any return type so void

} > = ({message , onCross}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cross} onPress={onCross} > 
      <Icon name="close-circle" size={moderateScale(20)} color="red" /> 
           </TouchableOpacity>

           <Image 
           source={require("../../../assets/images/logo_short.png")}
           style={styles.logo}
           />
           <View>
            {message === "meditation" ?
            <LottieView
            source={require("../../../assets/animations/breath.json")}
            style={{width: 400 , height: 400 , alignSelf:'center'}}
            autoPlay
            loop
            // by default both are true 
            />
            : <Markdown style={{
              body:{
                fontFamily: Fonts.Theme ,
                padding: 20 ,
                fontSize: moderateScale(22)
              }
            }
            }>
              {message}
            </Markdown>
          }
           </View>
          </View>
  )
}

export default Instructions

const styles = StyleSheet.create({
  container:{
 paddingVertical: 10,
 width: '90%',
 justifyContent:'center',
 backgroundColor:'white',
 shadowOffset: {width:1 ,height:1},
 shadowOpacity: 0.08,
 shadowRadius: 16,
 elevation: 10,
 shadowColor: "#000",
 borderRadius: 10, },
 logo:{
  width:50,
  height:40,
  alignSelf: 'center',
  marginVertical: 10,
 },
 cross:{
  position: 'absolute',
  right: 10,
  top: 10,

 }
})