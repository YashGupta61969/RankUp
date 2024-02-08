import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {useTheme} from '@react-navigation/native';
import { verticalScale } from '../../../constants/dimension';
import { fonts } from '../../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../../constants/fontSize';
import { color } from '../../../constants/colors';

const InputBoxes = ({onOtpChange}) => {
  const windowWidth = Dimensions.get('window').width;

  const {colors} = useTheme();
  return (
    <View style={{marginTop: verticalScale(10)}}>
      <OtpInput
        numberOfDigits={6}
        onTextChange={text => onOtpChange(text)}
        theme={{
          containerStyle: {
            marginVertical: verticalScale(6),
          },
          pinCodeContainerStyle: {
            borderWidth: 1.5,
            height: windowWidth > 500 ? verticalScale(90) : verticalScale(42),
          },
          pinCodeTextStyle: {
            fontFamily: fonts.regular,
            fontSize: RFValue(sizes.p1, 667),
            color: color.lightBlack,
          },
        }}
      />
    </View>
  );
};

export default InputBoxes;
