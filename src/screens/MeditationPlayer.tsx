import { StyleSheet, Text, View , Image, FlatList , SafeAreaView } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { songs } from '../utils/MusicData'
import Icon from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const MeditationPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList 
        data={songs}
        renderItem={({item}) => (
            <View>

         
            <Image 
            source={item.image}
            style={styles.img}
            />

            <Text>{item.title}</Text>

            </View>
        )}/>

<Icon name="play" size={24} color="black" />
<Icon name="pause" size={24} color="black" />
<AntDesign name="stepforward" size={24} color="black" />
<AntDesign name="stepbackward" size={24} color="black" />
      {/* <Text style={}>MeditationPlayer</Text> */}

    </SafeAreaView>
  )
}

export default MeditationPlayer

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'black'
    },
    img:{
        height:  200,
        width: 100
    }
})