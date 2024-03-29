import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './BottomStack';
import AuthStack from './AuthStack';
import SplashScreen from '../../screens/splashScreen/SplashScreen';
import {useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = () => {
  const {token} = useSelector(state=>state.auth)

 

  






  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {token ? <BottomStack/>:<AuthStack/>}
      </NavigationContainer>
    </View>
  );
};

export default AppStack;
