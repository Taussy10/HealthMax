// How to create Custom Component

import { StyleSheet, Text, View } from 'react-native';
//import React, { Children } from 'react'


interface Props{
    color: string
    children: React.ReactNode;
    // Children will be use as text to render
    fontSize: number
}




// Understand the use of props: use for sharing componnet data
//  between componnet{screen , component}


//1. write props: that you want to use as style and children and you have to send it to other component also

const CustomBanner: React.FC<Props> = ({color , children , fontSize}) => {
  return (
    <View >
      {/* <Text style={{color:color , fontSize:fontSize }}>{children}</Text> */}
      {/* If key value is then we don't have to write both key value it's just a shorthand */}
      <Text style={{color , fontSize }}>{children}</Text>
    </View>
  )
}

export default CustomBanner;

//const styles = StyleSheet.create({})