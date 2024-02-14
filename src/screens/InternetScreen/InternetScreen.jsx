import {View, Text, StatusBar, TouchableOpacity,BackHandler} from 'react-native';
import React from 'react';
import {internetScreenStyle} from './internetScreenStyle';
import {color} from '../../constants/colors';
import {images} from '../../constants/images';

const InternetScreen = () => {
  return (
    <View style={internetScreenStyle.internetScreenMain}>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <View style={internetScreenStyle.internetScreenTopText}>
        <Text style={internetScreenStyle.networkTextOne}>No Network</Text>
        <Text style={internetScreenStyle.networkTextTwo}>It seems the network is{'\n'}hiding from us.</Text>
        <Text style={internetScreenStyle.networkTextThree}>Kindly check if your network service is{'\n'}active or your wi-fi is connected.</Text>
      </View>
      <Text style={internetScreenStyle.internetText}>It seems the network is hiding from us</Text>
      <TouchableOpacity onPress={()=>BackHandler.exitApp()} activeOpacity={1} style={internetScreenStyle.touchableButton}>
     <Text style={internetScreenStyle.touchableText}>Close</Text>
      </TouchableOpacity>
      <View style={internetScreenStyle.imageView}>
      <images.NetworkImage width={380}/>
      </View>
    </View>
  );
};

export default InternetScreen;
