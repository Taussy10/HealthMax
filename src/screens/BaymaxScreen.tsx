import { StyleSheet, Text, View , Animated} from 'react-native'
import React ,{useRef , useEffect , useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../utils/Constants'
import Loading from '../Components/Baymax/Loading'
import Background from '../Components/Baymax/Background'
import BigHero6 from '../Components/Baymax/BigHero6'
import { speak } from '../utils/Speak'
import { prompt } from '../utils/data'
// import Pedometer from '../Components/Pedometer/PedometerBox'
import Instructions from '../Components/Baymax/Instructions'
import CountSteps from '../Components/Pedometer/CountSteps'
import { askAI } from '../Components/Baymax/Service/GeminiService'


// make sure that if you are using camelCase then you use camelCase
// Try to write everything in smallCase will make it clean 

// We are using Animated API of react native
//  https://reactnative.dev/docs/animations


const BaymaxScreen = () => {

  const [showInstructions, setShowInstructions] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [message, setMessage] = useState('')
  const [showPedometer, setShowPedometer] = useState(false)
  
 
  const blurOpacity = useRef(new Animated.Value(0)).current
  // useRef is use for stroing mutable values that doesn't rerenders  

  // .current stores the value so blurOpacity  = 0 
console.log(blurOpacity);

// blur current value 0 {0: transparent and 1: opaque}
// const startBlur = () =>{
//   Animated.timing(blurOpacity,{
//     toValue: 20,
//     duration: 2000,
//     useNativeDriver: true,
//     // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
//   }).start()
// }
const unBlur = () =>{
  Animated.timing(blurOpacity,{
    toValue: 0,
    duration: 20000,
    useNativeDriver: true,
    // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
  }).start()
}

// useEffect(() => {
//   const startBlur = () =>{
//     Animated.timing(blurOpacity,{
//       toValue: 0,
//       duration: 2000,
//       useNativeDriver: true,
//       // https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated
//     }).start()
//   }
// }, [blurOpacity])

const handleError = async(err: string) => {

  speak("There was an error! please try again")
  // startblur
  setMessage('')
  setShowLoader(true)
  // soundplayer stop it
  setShowInstructions(false)
  console.log(err);
  

}


const handleResponse = async(type: string , promptText: string , sound:string) => {
  // This handleallResponsees having params: type , promptText , sound 
  try {
    if(type === 'meditation'){
      // if variable type is mediation 
      speak("Focus on your breath")
      // palySound()
      setMessage('meditation')
      return
      // Close the code 
    }

const data = await askAI(promptText)
setMessage(data)
speak(data)




 if(type = 'happiness'){
  setTimeout(() => {
    // playsound(sound)
  }, 5000)
 }else{
  // playSound(sound)
 }
// unblur 

    setShowLoader(true)
  } catch (err:any) {
handleError(err)    
  }finally{
    setShowLoader(false)
  }

}


const onOptionPresshandler = (type:string) => {
setShowInstructions(true)
if (type === 'pedometer') {
  // This  checks if statment that if pedometer then do this 
  setShowPedometer(true)
  setShowLoader(false)
  return
  // if pedometer found then: pedo: true and loader: false then end the code that's it 
} 

// if type != pedometer then this will happen 
switch (type) {
  case 'happiness':
    handleResponse(type , prompt.joke , 'laugh' )
    break;
  case 'motivation':
    handleResponse(type , prompt.motivation , 'motivation' )
    break;
  case 'health':
    handleResponse(type , prompt.health , 'meditaiton' )
    break;
  case 'meditation':
    handleResponse(type , prompt.health , 'meditation' )
    break;

  default:
    handleError("There was no type like that")
}
}



// UI render from here only 


  return (
    <SafeAreaView style={styles.container}>

{
  message && (
    // && checks true or not
    <Instructions 
    onCross = {() => {
      // startBlur()
      setMessage("")
      setShowLoader(true)
      // soundPlayer.stop
      setShowInstructions(false)
    }}
    message ={message}
    />
  )
}


{
  showPedometer && (
    <CountSteps 

    onCross = {() => {
      // startBlur()
      setMessage("")
      setShowLoader(true)
      setShowPedometer(false)
      // soundPlayer.stop
      setShowInstructions(false)
    }}
    message ={message}
    // Open your eyes and it has two props onCross and message that we are passing to pedometer
    />
  )
}







    {
      //  && operator checks whether showLoader true or not if yeah then will render UI 
   showLoader && 
  
   <View style={styles.loaderContainer}>
 <Loading />
   </View>

  }

{
  !showInstructions &&  
  // onPress={() => { }} 
  // onPress={}
  // What's the diff in both  
  <BigHero6 onPress={onOptionPresshandler}   />
}

      <Background blurOpacity={blurOpacity} />
    
    </SafeAreaView>
  )
}

export default BaymaxScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.secondry,
    // content kidhar se kidhar hota hai left to right but it's RN so will be ulta top to bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer:{
    position: 'absolute',
  }
})