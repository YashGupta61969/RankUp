import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {internetScreenStyle} from './internetScreenStyle';
import {color} from '../../constants/colors';
import {images} from '../../constants/images';
import RNRestart from "react-native-restart"

const InternetScreen = () => {
  return (
    <View style={internetScreenStyle.internetScreenMain}>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <Text style={internetScreenStyle.internetText}>It seems the network is hiding from us</Text>
      <TouchableOpacity onPress={()=>RNRestart.Restart()} activeOpacity={1} style={internetScreenStyle.touchableButton}>
     <Text style={internetScreenStyle.touchableText}>Try Again</Text>
      </TouchableOpacity>
      <View style={internetScreenStyle.imageView}>
      <images.NetworkImage width={380}/>
      </View>
    </View>
  );
};

export default InternetScreen;
