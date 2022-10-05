import React from 'react'
import { Pressable,Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

 const Button = ({title,onPress,style}) => {
    // const handlePress=()=>{
    //     console.log("Button clicked!!")
    // }
    console.log("INSIDE BUTTON!!")
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container,style]}>
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
  )
}
export default React.memo(Button) ;
