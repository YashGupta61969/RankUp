import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {twoFAuthenticationStyle} from './twoFAuthenticationStyle';
import {icons} from '../../constants/icons';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {toast} from '../../utils/toast';

import Loader from '../../components/loader/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import TwoFaDeactivate from '../../components/modals/twoFaDeactivate/TwoFaDeactivate';
import {setRefreshToken} from '../../utils/helper';
import {showModal} from '@whitespectre/rn-modal-presenter';
import { color } from '../../constants/colors';
import CustomSwitchButton from '../../components/accounts/CustomSwitchButton';
import { getProfile, twoFactorEnable } from '../../data/services/authApi';
import TwoFaDeactivate from '../../components/modals/twoFaDeactivate/TwoFaDeactivate';

const TwoFAuthentication = ({navigation}) => {
  // States
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [deactivationModal, setDeactivationModal] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState();
  const [emailEnabled, setEmailEnabled] = useState();
  const [loading, setLoading] = useState(false);
  // const {switchValue} = useSelector(state => state.switch);
  // const {colors} = useTheme();
  const dispatch = useDispatch();

  // Get Sms Value from Async
  useEffect(() => {
    const handleSmsEnabled = async () => {
      try {
        const isSmsEnabledString = await AsyncStorage.getItem('sms_enabled');
        const isEmailEnabledString = await AsyncStorage.getItem(
          'email_enabled',
        );
        const isSmsEnabled = JSON.parse(isSmsEnabledString);
        const isEmailEnabled = JSON.parse(isEmailEnabledString);
        setSmsEnabled(isSmsEnabled);
        setEmailEnabled(isEmailEnabled);
      } catch (error) {
        toast({type: 'error', text1: error?.response?.data.detail});
        // setRefreshToken(error,dispatch)
      }
    };
    handleSmsEnabled();
  }, []);

  // GetProfile for the user Contact Number

  useEffect(() => {
    const handleGetProfile = async () => {
      try {
        setLoading(true);
        const {data} = await getProfile();
        setPhone(data?.results?.phone);
        setEmail(data?.results?.email);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast({type: 'error', text1: error?.response?.data?.detail});
      }
    };
    handleGetProfile();
  }, []);

  // Open AuthenticationDeactivation Modal

  const handleDeactivationClose = async()=>{
    setDeactivationModal(false)
  }

  // Usage in EnableTwoFactorAuthentication
  const userDataPhone = {
    phone: phone,
  };

  // Usage in EnableTwoFactorByEmail
  const userDataEmail = {
    email: email,
  };

  const enableTwoFactorAuthentication = async (verificationType, userData,authenticationType) => {
    try {
      setLoading(true);
      if (verificationType === 'phone' && smsEnabled) {
        setLoading(false);
        setIsEnabled(false);
        showModal(TwoFaDeactivate, { phone, navigation});
      } else if (verificationType === 'email' && emailEnabled) {
        setIsEnabled(false);
        showModal(TwoFaDeactivate, {navigation, email});
        setLoading(false);
      } else {
        if (verificationType === 'phone') {
          setIsEnabled(true);
        } else if (verificationType === 'email') {
          setIsEmailEnabled(true);
        }

        const {data} = await twoFactorEnable(userData);
        toast({type: 'success', text1: data?.detail});
        setLoading(false);

        setTimeout(() => {
          navigation.navigate(accountRoutes.SMSAuthentication, {
            verification_type: verificationType,
            authenticationType
          });
        }, 1000);
      }
    } catch (error) {
      setLoading(false);

      if (verificationType === 'phone') {
        setIsEnabled(false);
      } else if (verificationType === 'email') {
        setIsEmailEnabled(false);
      }

      toast({type: 'error', text1: error.response.data.detail});
    }
  };


  return (
    <View
      style={[
        twoFAuthenticationStyle.twoFAuthenticationMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader
        text={accountRoutes.TwoFAuthentication}
        textColor={color.lightBlack}
      />
      <Loader loading={loading} />
      <Text
        style={[
          twoFAuthenticationStyle.authenticationMainText,
          {color: color.lightBlack},
        ]}>
        Choose an option to recieve your codes
      </Text>

      <View
        style={[
          twoFAuthenticationStyle.authenticationOptionWrapper,
          {backgroundColor: color.lightSkyBlue, borderColor: color.grey},
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            twoFAuthenticationStyle.authenticationOption,
            {borderColor: color.lightSkyBlue},
          ]}>
          <View>
            <Text
              style={[
                twoFAuthenticationStyle.authenticationOptionHeading,
                {color: color.lightBlack},
              ]}>
              SMS Authentication
            </Text>
            <Text
              style={[
                twoFAuthenticationStyle.authenticationOptionText,
                {color: color.lightBlack},
              ]}>
              Enable the use of your fingerprint or face ID
            </Text>
          </View>
          <View style={twoFAuthenticationStyle.authenticationOptionRightView}>
            <CustomSwitchButton
              isEnabled={isEnabled === false ? smsEnabled : isEnabled}
              toggleSwitch={() =>
                enableTwoFactorAuthentication('phone', userDataPhone, {phone})
              }
              disable={false}
            />
            <icons.RightArrow width={18} height={18}/>
            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            twoFAuthenticationStyle.authenticationOption,
            {borderColor: color.grey},
          ]}>
          <View>
            <Text
              style={[
                twoFAuthenticationStyle.authenticationOptionHeading,
                {color: color.lightBlack},
              ]}>
              Email Authentication
            </Text>
            <Text
              style={[
                twoFAuthenticationStyle.authenticationOptionText,
                {color: color.lightBlack},
              ]}>
              Enable the use of your fingerprint or face ID
            </Text>
          </View>
          <View style={twoFAuthenticationStyle.authenticationOptionRightView}>
            <CustomSwitchButton
              isEnabled={
                isEmailEnabled === false ? emailEnabled : isEmailEnabled
              }
              toggleSwitch={() =>
                enableTwoFactorAuthentication('email', userDataEmail, {email})
              }
              disable={false}
            />
            <icons.RightArrow width={18} height={18}/>
            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            twoFAuthenticationStyle.authenticationOption,
            {borderBottomWidth: 0},
          ]}>
          <View>
            <Text
              style={[
                twoFAuthenticationStyle.authenticationOptionHeading,
                {color: color.lightBlack},
              ]}>
              Authentication App
            </Text>
            <Text
              style={[
                twoFAuthenticationStyle.authenticationOptionText,
                {color: color.lightBlack},
              ]}>
              Enable the use of your fingerprint or face ID
            </Text>
          </View>
          <View style={twoFAuthenticationStyle.authenticationOptionRightView}>
            <CustomSwitchButton />
            <icons.RightArrow width={18} height={18}/>
            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoFAuthentication;
