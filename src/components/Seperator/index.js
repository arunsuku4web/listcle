import React from 'react'
import { Pressable,Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

 const Seperator = ({text}) => {
    // const handlePress=()=>{
    //     console.log("Button clicked!!")
    // }
  return (
    <View style={styles.container}>
        <View style={styles.line}></View>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.line}></View>
    </View>
  )
}
export default React.memo(Seperator);
