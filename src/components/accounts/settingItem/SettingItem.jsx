import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import React, {useState} from 'react';
import {settingItemStyle} from './settingItemStyle';
import {icons} from '../../../constants/icons';
import {useNavigation, useTheme} from '@react-navigation/native';
// import CustomSwitchButton from '../CustomSwitchButton';
import {horizontalScale} from '../../../constants/dimension';
import {useSelector } from 'react-redux';
import { color } from '../../../constants/colors';
import CustomSwitchButton from '../CustomSwitchButton';

const SettingItem = ({
  textHeading,
  textDescription,
  icon,
  display,
  route,
  switchIcon,
  userData,
  value,
  action
}) => {

  const {navigate} = useNavigation();
  // const {switchValue} = useSelector(state=>state.switch)
 const {colors} = useTheme()
  


  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigate(route)} style={[settingItemStyle.settingsItemMain,{ borderColor: color.grey}]}>
      <View style={settingItemStyle.settingsItemLeft}>
        {icon && icon}
        <View style={settingItemStyle.settingsItemTextView}>
          <Text style={[settingItemStyle.textHeading,{color:colors.text}]}>{textHeading}</Text>
          <Text style={[settingItemStyle.textDetail, {display: display,color:colors.text}]}>
            {textDescription}
          </Text>
        </View>
      </View>
      {switchIcon === true ? (
        <View style={{marginLeft: horizontalScale(110)}}>
          <CustomSwitchButton
            isEnabled={value}
            toggleSwitch={action}
          />
        </View>
      ) : null}
        {/* {switchValue === false ? <icons.RightArrow width={23} height={23} />:<icons.RightArrowLight width={23} height={23} />} */}
        <icons.RightArrow width={20} height={20}/>
      
    </TouchableOpacity>
  );
};

export default SettingItem;
