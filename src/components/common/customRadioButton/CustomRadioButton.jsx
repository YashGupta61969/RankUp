import React from 'react';
import { color } from '../../../constants/colors';
import {TouchableOpacity, View} from "react-native"
import { customRadioButtonStyle } from './customRadioButtonStyle';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CustomRadioButton = ({selected,item}) => {

  const {switchValue} = useSelector(state=>state.switch)

  // Css Style Condition
  const backgroundColor = switchValue === true ? color.white : color.blue_brand
  const display = selected === item.id  ? "flex" : "none"
 
  const {colors} = useTheme()
  
  return (

      

    <View  style={[customRadioButtonStyle.outerRadioButton,{borderColor:colors.border}]}>
    <View style={[customRadioButtonStyle.innerRadioButton,{backgroundColor:colors.border,display:display}]}> 
   
   </View>
   </View>
      

      
  );
};

export default CustomRadioButton;