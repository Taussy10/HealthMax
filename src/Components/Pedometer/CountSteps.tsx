import { StyleSheet, Image, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { FC, useEffect } from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

import StepCounter, {

  parseStepData,
  startStepCounterUpdate,
  stopStepCounterUpdate,} from '@dongminyu/react-native-step-counter';

import CircularProgress from 'react-native-circular-progress-indicator';
import { usePedometerStore } from '../../state/PedometerStore';
import { speak } from '../../utils/Speak';
import { Fonts } from '../../utils/Constants';
import CustomText from '../CustomComponents/CustomText';


const CountSteps:FC<{onCross: () => void , message: string }> = ({onCross , message}) => {

  const {stepCount , dailyGoal , addSteps} = usePedometerStore()




  StepCounter.addListener('StepCounter.stepSensorInfor')
// addListenr we are getting from StepmCounter

 const startStepCounter = () => {

startStepCounterUpdate(new Date() , (data) =>{
  const parsedData = parseStepData(data);
  addSteps(Number(parsedData.steps) , parsedData.distance )
})
 }

 const stopStepCounter = () => {
  stopStepCounterUpdate()
 }

 useEffect(() =>{
 if (stepCount >= dailyGoal) {
  speak("You have completed your daily goal! No need to start the counter again today")
 }else{
  startStepCounter()
 }


 return() =>{
  stopStepCounter()
 }
 },[])

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.cross} onPress={ () =>{
      Alert.alert("Your step counter stopped !")
      stopStepCounter()
      onCross();

     } } > 
     {/*  so diff between onPress{ } and onPress{ () => { } } is that when 
     you want to pass one function  then first and if you want to pass 2 function  then 2nd one
     or you can say

     
     In summary:
     1.Can only pass one function and cannot pass parameters.
     2. Second method (onPress={() => { function1(); function2(); }}): You can execute multiple functions and pass parameters.

 const handlePress = (msg) => {
  console.log(msg);
};

const hello = () =>{
} 
<Button onPress={() => handlePress('Hello!'); Hello();} />



     */}
    <Icon name="close-circle" size={moderateScale(20)} color="red" /> 
         </TouchableOpacity>

         <Image 
         source={require("../../../assets/images/logo_short.png")}
         style={styles.logo}
         />
         <View style={styles.indicator}>
       <CircularProgress
       value={stepCount}
       maxValue={dailyGoal}
       valueSuffix='/2000'
       progressValueFontSize={22}
       radius={120}
       activeStrokeColor='#cdd27e'
       inActiveStrokeColor='#4c6394'
       inActiveStrokeOpacity={0.5}
       inActiveStrokeWidth={20}
       title='Steps'
       titleColor='#555'
       titleFontSize={22}
       titleStyle={{fontFamily: Fonts.SemiBold}}

       />
       <CustomText fontSize={moderateScale(8)} fontFamily={Fonts.SemiBold} style={styles.text}  >
        Start walking , counter will udpate automatically

       </CustomText>
         </View>
        </View>
  )
}

export default CountSteps

const styles = StyleSheet.create({
  text:{
 marginTop: 20,
 textAlign:'center'
  },
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
 indicator:{
 marginTop: 10,
 marginBottom: 20, 
 alignSelf: 'center',
 justifyContent:'center',
 alignItems: 'center'
 },
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
//  why something called cleanUp function when we are unmounting the component so learn about
// these things 