import React, { useState } from 'react'
import { View,Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import { styles } from './styles';

 const Signup = () => {
  const[checked,setChecke]=useState(false);
  const onSignIn=()=>{
     console.log("HELLO");
  }
  return (
    <View style={styles.container}>
        <AuthHeader title="Sign Up" ></AuthHeader>
        <Input label="Name" placeholder="John Doe" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword={true} label="Password" placeholder="............." />
        <View style={styles.agreeRow}>
         <Checkbox checked={checked} onCheck={setChecke} />
         <Text style={styles.agreeText}>I agree with   <Text style={styles.agreeTextBold}>Terms </Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign up" />
        <Seperator text="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>Already have an account? 
          <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text>
        </Text>
    </View>
  )
}

export default Signup;
