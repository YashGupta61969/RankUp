import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';
import {moderateScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';
import {fonts} from '../../constants/fonts';

const CancelButton = ({action,text}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={action}
      style={[
        cancelButtonStyle.cancelButton,
        {borderColor: color.darkSkyBlue},
      ]}>
      <Text
        style={[
          cancelButtonStyle.cancelButtonText,
          {color: color.darkSkyBlue},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CancelButton;

export const cancelButtonStyle = StyleSheet.create({
  cancelButton: {
    borderWidth: 1,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
  },
  cancelButtonText: {
    fontFamily: fonts.medium,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p4, 667),
  },
});
