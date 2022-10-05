import React, { useState } from 'react'
import { View,Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import { styles } from './styles';

 const Signin= () => {
  const[checked,setChecke]=useState(false);
  const onSignUp=()=>{
     console.log("HELLO");
  }
  return (
    <View style={styles.container}>
        <AuthHeader title="Sign In" ></AuthHeader>
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword={true} label="Password" placeholder="............." />
       
        <Button style={styles.button} title="Sign In" />
        <Seperator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>Don’t have an account? 
          <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text>
        </Text>
    </View>
  )
}

export default React.memo(Signin);
