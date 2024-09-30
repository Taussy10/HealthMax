
import * as Speech from 'expo-speech'

export const speak = (message:string) =>{
    const thingsToSay = message;
    Speech.speak(thingsToSay)
}



