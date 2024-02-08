import {View, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {confirmPhoneNumberStyle} from './confirmPhoneNumberStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import {useTheme} from '@react-navigation/native';
import GradientButton from '../../components/buttons/GradientButton';

const ConfirmPhoneNumber = ({route}) => {
  const {colors} = useTheme();
  const paddingValue = Platform.OS === 'ios' ? 14 : 9;
  const {userContact} = route.params;

  const formatPhoneNumber = inputNumber => {
    let phoneNumber = String(inputNumber);
    if (phoneNumber.startsWith('+1')) {
      phoneNumber = phoneNumber.slice(2);
    }
    if (phoneNumber.length === 10) {
      const formattedNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6,
      )}-${phoneNumber.slice(6)}`;
      return formattedNumber;
    } else {
      return 'Invalid input: Please provide a 10-digit number.';
    }
  };

  const formattedNumber = formatPhoneNumber(userContact);

  return (
    <View
      style={[
        confirmPhoneNumberStyle.confirmPhoneMain,
        {backgroundColor: colors.background},
      ]}>
      <ChildStackHeader
        text={accountRoutes.ConfirmPhoneNumber}
        textColor={colors.text}
      />
      <View style={confirmPhoneNumberStyle.confirmphoneNumberTopView}>
        <Text
          style={[
            confirmPhoneNumberStyle.confirmphoneNumberTopText,
            {color: colors.text},
          ]}>
          Please type in the code that was sent to your new phone number to
          verify.
        </Text>
        <Text
          style={[
            confirmPhoneNumberStyle.userPhoneNumber,
            {color: colors.text},
          ]}>
          {formattedNumber}
        </Text>
        <View style={confirmPhoneNumberStyle.inputView}>
          <Text
            style={[
              confirmPhoneNumberStyle.inputHeading,
              {color: colors.text},
            ]}>
            Verification code
          </Text>
          <TextInput
            style={[
              confirmPhoneNumberStyle.input,
              {paddingVertical: paddingValue},
            ]}
            placeholder="example"
            placeholderTextColor={color.blue_brand}
          />
        </View>
        <TouchableOpacity>
          <Text style={confirmPhoneNumberStyle.resendCodeText}>
            Resend code
          </Text>
        </TouchableOpacity>
      </View>

      <GradientButton text="Verify" />
    </View>
  );
};

export default ConfirmPhoneNumber;
