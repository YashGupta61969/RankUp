import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from '../../constants/routes';
import Login from '../../screens/auth/login/Login';
import Signup from '../../screens/auth/signup/Signup';
import SplashScreen from '../../screens/splashScreen/SplashScreen';
import OnboardingScreenOne from '../../screens/auth/onboarding/OnboardingScreenOne';
import OnboardingScreenThree from '../../screens/auth/onboarding/OnboardingScreenThree';
import OnboardingScreenTwo from '../../screens/auth/onboarding/OnboardingScreenTwo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const [isFirstLaunched, setIsFirstLaunched] = useState(null);

  
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunched(true);
      } else {
        setIsFirstLaunched(false);
      }
    });
  }, []);

  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched === true) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={authRoutes.OnBoardingOne}
            component={OnboardingScreenOne}
          />
          <Stack.Screen
            name={authRoutes.OnBoardingTwo}
            component={OnboardingScreenTwo}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name={authRoutes.OnBoardingThree}
            component={OnboardingScreenThree}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen name={authRoutes.Login} component={Login} />
          <Stack.Screen name={authRoutes.Signup} component={Signup} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={authRoutes.Login} component={Login} />
          <Stack.Screen name={authRoutes.Signup} component={Signup} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  }

  
};

export default AuthStack;
