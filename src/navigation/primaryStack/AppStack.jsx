import {View, Text, SafeAreaView,Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './BottomStack';
import AuthStack from './AuthStack';
import SplashScreen from '../../screens/splashScreen/SplashScreen';
import {useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authToken } from '../../data/redux/slice/authSlice';

const AppStack = () => {
  const {token} = useSelector(state=>state.auth)


  





  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {/* {token ? <BottomStack/>:<AuthStack/>} */}
        <BottomStack/>
      </NavigationContainer>
    </View>
  );
};

export default AppStack;
