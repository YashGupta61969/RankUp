import {View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {smsAuthenticationStyle} from './smsAuthenticationStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {useTheme} from '@react-navigation/native';
import {toast} from '../../utils/toast';

import Loader from '../../components/loader/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {verticalScale} from '../../constants/dimension';
import { color } from '../../constants/colors';
import InputBoxes from '../../components/common/inputboxes/InputBoxes';
import { twoFactorDeactivate, twoFactorEnable, twoFactorVerification } from '../../data/services/authApi';
import PhoneNumber from '../phoneNumber/PhoneNumber';

const SmsAuthentication = ({navigation, route}) => {
  // States

  const [loading, setLoading] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const {colors} = useTheme();
  const {verification_type} = route.params;
  const {deactivation_type} = route.params;
  const {email} = route.params.authenticationType;
  const {phone} = route.params.authenticationType;
  // Two factor Verification


  const handleInputChange = otpValue => {
    setInputCode(otpValue);
    if (otpValue.length === 6) {
      Keyboard.dismiss();
    }
  };

  const formattedNumber = `(${phone?.substring(2, 5)}) ${phone?.substring(5,7,)}**-**${phone?.substring(11)}`;

  // Activate the Two Factor Authentication
  const handleTwoFaVerification = async () => {
    const userData = {
      otp: inputCode,
      verification_type: verification_type,
    };
    try {
      setLoading(true);
      const {data} = await twoFactorVerification(userData);
      setLoading(false);
      toast({type: 'success', text1: data.detail});
      if (userData.verification_type === 'phone') {
        await AsyncStorage.setItem('sms_enabled', JSON.stringify(true));
      } else {
        await AsyncStorage.setItem('email_enabled', JSON.stringify(true));
      }
      setTimeout(() => {
        navigation.navigate(accountRoutes.Setting);
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };

  // Deactivate the Two Factor Authentication
  const handleTwoFactorDeactivation = async () => {
    const userData = {
      otp: inputCode,
      deactivation_type: deactivation_type,
    };
    try {
      setLoading(true);
      const {data} = await twoFactorDeactivate(userData);
      setLoading(false);
      toast({type: 'success', text1: data.detail});
      if (deactivation_type === '2fa_sms') {
        await AsyncStorage.setItem('sms_enabled', JSON.stringify(false));
      } else {
        await AsyncStorage.setItem('email_enabled', JSON.stringify(false));
      }
      setTimeout(() => {
        navigation.navigate(accountRoutes.Setting);
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };

  // handleResetCode

  const handleReset = async () => {
    const userData = {
      phone: phone,
    };
    const userDataEmail = {
      email: email,
    };
    try {
      setLoading(true);
      if (phone) {
        const {data} = await twoFactorEnable(userData);
        toast({type: 'success', text1: data?.detail});
        setLoading(false);
      } else {
        const {data} = await twoFactorEnable(userDataEmail);
        toast({type: 'success', text1: data?.detail});
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };

  // Keyboard Dismiss



  return (
    <View
      style={[
        smsAuthenticationStyle.smsAuthenticationMain,
        {backgroundColor: colors.background},
      ]}>
      <ChildStackHeader
        text={accountRoutes.SMSAuthentication}
        textColor={color.lightBlack}
      />
      <View style={smsAuthenticationStyle.smsTopView}>
        <Loader loading={loading} />
        {email ? (
          <Text
            style={[
              smsAuthenticationStyle.smsAuthenticationText,
              {color: colors.text},
            ]}>
            Enter the authentication code sent to your email {email}
          </Text>
        ) : (
          <Text
            style={[
              smsAuthenticationStyle.smsAuthenticationText,
              {color: colors.text},
            ]}>
            Enter the authentication code sent to your phone number{' '}
            {formattedNumber}
          </Text>
        )}

        <InputBoxes onOtpChange={handleInputChange} />

        <TouchableOpacity
          onPress={handleReset}
          style={{marginVertical: verticalScale(10)}}>
          <Text style={smsAuthenticationStyle.resendText}>Resend code</Text>
        </TouchableOpacity>
      </View>
      <View style={smsAuthenticationStyle.buttonWrapper}>
        <TouchableOpacity
          style={[
            smsAuthenticationStyle.cancelButton,
            {borderColor: colors.border},
          ]}>
          <Text
            style={[
              smsAuthenticationStyle.cancelButtonText,
              {color: colors.text},
            ]}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            verification_type
              ? handleTwoFaVerification
              : handleTwoFactorDeactivation
          }
          style={smsAuthenticationStyle.verifyButton}>
          <Text style={smsAuthenticationStyle.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmsAuthentication;
