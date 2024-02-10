import {View, Text, SafeAreaView} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from '../../constants/routes';
import Login from '../../screens/auth/login/Login';
import Signup from '../../screens/auth/signup/Signup';
import SplashScreen from '../../screens/splashScreen/SplashScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
//  const [splashTimer, setSplashTimer] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSplashTimer(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (splashTimer) {
//     return <SplashScreen />;
//   }
// CheckToken




  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={authRoutes.Login} component={Login} />
      <Stack.Screen name={authRoutes.Signup} component={Signup} />
        {/* <Stack.Screen name={authRoutes.ForgotPassword} component={ForgotPassword} />
      <Stack.Screen name={authRoutes.VerifyEmail} component={VerifyEmail} />
      <Stack.Screen name={authRoutes.ResetPassword} component={ResetPassword} /> */}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthStack;
