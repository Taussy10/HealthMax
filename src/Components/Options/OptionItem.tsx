import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { circleRadius } from '../../utils/Constants';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {scale ,moderateScale} from "react-native-size-matters"

const OptionItem: FC <{
    item: any ;
    onPress: (type: string) => void
}> = ({item , onPress}) => {

    // Learn it how the swith system works

    let iconColor ;
    let iconName: string ;

    switch (item) {
        case 'meditation':
            iconColor = "#2dec72";
            iconName = 'nature-people'; // Check if 'nature-people' exists in MaterialCommunityIcons
            break;
        case 'pedometer':
            iconColor = "#2dba74";
            iconName = 'run';
            break;
        case 'health':
            iconColor = "green";
            iconName = 'heart-pulse'; // 'health-and-safety' might not be valid, use 'heart-pulse' instead
            break;
        case 'happiness':
            iconColor = "#fb26ff";
            iconName = 'emoticon-happy-outline';
            break;
        case 'motivation':
            iconColor = "#ff6347";
            iconName = 'lightbulb-outline';
            break;
        default:
            iconColor = "#ffbc66";
            iconName = "fire";
            break;
    }

    // console.log(item, iconName, iconColor); // Log to check values

  return (
    <TouchableOpacity style={styles.container} onPress={() =>{
        onPress(item)
    }}>
      {/* <Icon name ={iconName} color={iconColor} size={moderateScale(32)} /> */}
      <Icon name={iconName} size={moderateScale(24)} color={iconColor} />
    </TouchableOpacity>
  )
}

export default OptionItem

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
})