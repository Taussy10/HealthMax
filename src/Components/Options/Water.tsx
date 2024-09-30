import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { circleRadius } from '../../utils/Constants'
import  Icon  from 'react-native-vector-icons/Ionicons'
import {scale , verticalScale , moderateScale} from 'react-native-size-matters'
import {useWaterStore}  from '../../state/WaterStore'
import { Audio } from 'expo-av'

import { speak } from '../../utils/Speak'

const Water = () => {

const {waterDrinkStamps , addWaterIntake} = useWaterStore()

const totalSegments = 8;
// total glass of water
const completedSegments = waterDrinkStamps.length;
// How many glass has completed of water

const handlePress = () =>{
if (completedSegments < totalSegments) {
  const timestamp = Date().toString()
  addWaterIntake(timestamp)
}else{
 speak("You have Completed your daily water intake")
//  We just execute function
}
}

const containerStyle = [
  styles.container,
  completedSegments === totalSegments && styles.containerCompleted
]

 
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress } >
     <Icon name='water' color='#1ca3ec' size={moderateScale(35)} />

     <View style={styles.segmentContainer}> 

  {Array.from({length:totalSegments}).map((_ , index) =>(
    <View 
    key={index}
    style={[styles.segment , 
      {
      backgroundColor: completedSegments === totalSegments ?
      "#00D100": index <completedSegments ? "#1ca3ec" : "#eee",

      transform:[
        {rotate: `${(index * 360)/ totalSegments}deg`},
        {translateX: circleRadius / 2-5}
      ]
    }     ]}
    />

     
  ))}
 


     </View>
    </TouchableOpacity>
  )
}

export default Water

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: circleRadius ,
        width: circleRadius ,
        borderRadius: circleRadius ,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10 ,
        shadowOffset: {width: 1 , height: 1},
        elevation: 10 ,
        shadowRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2 ,
    },
    containerCompleted:{
  shadowColor: 'yellow',
  elevation: 10,

    },
    segmentContainer:{
 position: 'absolute',
 height: circleRadius ,
 width: circleRadius ,
 borderRadius: circleRadius/2 ,
 justifyContent: 'center',
 alignItems: 'center'


    },
    segment:{
 position: 'absolute',
 width: 8 ,
 height: 4,
 borderRadius: 2,
    }
})