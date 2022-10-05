
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import Signin from './src/screens/auth/Signin';

const App = () => {
 const GOOGLE_WEB_CLIENT_ID='149517614920-gsgrn4evf3bpdcolqkihh5d1fj0rqrkk.apps.googleusercontent.com';
  console.log('ID>>',GOOGLE_WEB_CLIENT_ID);
  useEffect(()=>{

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    
    });

  },[])
  return (
  <SafeAreaView>
    {/* <Splash></Splash> */}
    {/* <Signup></Signup> */}
    <Signin></Signin>
  </SafeAreaView>
  )
}


export default App;
