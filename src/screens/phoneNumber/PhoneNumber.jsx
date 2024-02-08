import {View, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {phoneNumberStyle} from './phoneNumberStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import {useNavigation, useTheme} from '@react-navigation/native';
import GradientButton from '../../components/buttons/GradientButton';

const PhoneNumber = ({route}) => {
  const {colors} = useTheme();
  const {userContact} = route?.params;
  const {navigate} = useNavigation();

  //paddingValue

  const paddingValue = Platform.OS === 'ios' ? 14 : 9;

  // handleProceed

  const handleProceed = () => {
    navigate(accountRoutes.ConfirmPhoneNumber, {userContact});
  };



  


  return (
    <View
      style={[
        phoneNumberStyle.phoneNumberMain,
        {backgroundColor: colors.background},
      ]}>
      <ChildStackHeader
        text={accountRoutes.PhoneNumber}
        textColor={colors.text}
      />
      <View style={phoneNumberStyle.phoneNumberTopView}>
        <Text
          style={[phoneNumberStyle.phoneNumberTopText, {color: colors.text}]}>
          Please input your phone number. We are going to send a code for
          verification before update.
        </Text>
        <View style={phoneNumberStyle.inputView}>
          <Text style={[phoneNumberStyle.inputHeading, {color: colors.text}]}>
            Phone number
          </Text>
          <TextInput
            style={[
              phoneNumberStyle.input,
              {paddingVertical: paddingValue, color: colors.text},
            ]}
            value={userContact ? userContact : 'NA'}
            placeholderTextColor={color.spanish_grey}
          />
        </View>
      </View>
      <GradientButton text="Proceed" action={handleProceed} />
    </View>
  );
};

export default PhoneNumber;
