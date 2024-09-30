import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

import {GEMINI_API_KEY} from './API'

// const GeminiService = () => {

const genAI =  new GoogleGenerativeAI(GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export  const askAI = async (prompt:string) => {

    try {
        const result = await model.generateContent(prompt);
       const response = result.response.text()

       console.log(response, "response");
       console.log(result , "rsult");

       return response

       
       
    } catch (error:any) {

        throw error
        // console.log(error.message , "message");
        
        
        
    }


    
}




//   return (
//     <View>
//       <Text>GeminiService</Text>
//     </View>
//   )
// }

// export default GeminiService

// const styles = StyleSheet.create({})