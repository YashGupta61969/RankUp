import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from '../../constants/routes';
import Login from '../../screens/auth/login/Login';
import Signup from '../../screens/auth/signup/Signup';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
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
