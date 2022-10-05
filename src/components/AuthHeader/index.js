import React from 'react'
import { Pressable,Text, Image, View } from 'react-native';
import { styles } from './styles';

 const AuthHeader = ({title,onBackPress}) => {
    // const handlePress=()=>{
    //     console.log("Button clicked!!")
    // }
  return (
   <View style={styles.container}>
    <Pressable onPress={onBackPress}>
    <Image resizeMode='contain' style={styles.image} source={require('../../assets/back_arrow.png')} />
    </Pressable>
    <Text style={styles.title}>{title}</Text>
   </View>
  )
}
export default React.memo(AuthHeader);
