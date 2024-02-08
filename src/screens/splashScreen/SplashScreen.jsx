import React from 'react';
import {splashScreenStyle} from './splashScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../constants/icons';
import { View,StatusBar } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{flex:1}}>
    <StatusBar barStyle="light-content" backgroundColor="#3A86FF"/>
    <LinearGradient
      colors={['#3A86FF', '#1C28AA']}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={splashScreenStyle.splashMain}>
      <icons.SplashLogo width={150} height={150} />
    </LinearGradient>
    </View>
  );
};

export default SplashScreen;
