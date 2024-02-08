import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {twoFaDeactivateStyle} from './twoFaDeactivateStyle';
import Modal from 'react-native-modal';
import {useNavigation, useTheme} from '@react-navigation/native';
import {accountRoutes} from '../../../constants/routes';
import {toast} from '../../../utils/toast';
import Loader from '../../loader/Loader';
import {color} from '../../../constants/colors';
import {twoFactorDeactivate} from '../../../data/services/authApi';

const TwoFaDeactivate = ({colors, dismiss, phone, navigation, email}) => {
  const [loading, setLoading] = useState(false);

  // handelDeactivation

  const handleDeactivation = async () => {
    const userData = {
      deactivation_type: phone ? '2fa_sms' : '2fa_email',
    };

    try {
      setLoading(true);
      const {data} = await twoFactorDeactivate(userData);
      dismiss();
      toast({type: 'success', text1: data?.detail});
      setTimeout(() => {
        navigation.navigate(accountRoutes.SMSAuthentication, {
          deactivation_type: phone ? '2fa_sms' : '2fa_email',
          authenticationType: phone ? {phone} : {email},
        });
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error?.response?.data?.detail});
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={[
        twoFaDeactivateStyle.innerModal,
        {backgroundColor: color.white, borderColor: color.grey},
      ]}>
      <Loader loading={loading} />
      <Text style={[twoFaDeactivateStyle.mainText, {color: color.lightBlack}]}>
        Do you Want to Deactivate the Two Factor Authentication ?
      </Text>
      <View style={twoFaDeactivateStyle.Button}>
        <TouchableOpacity
          onPress={() => dismiss()}
          style={twoFaDeactivateStyle.cancelButton}>
          <Text
            style={[
              twoFaDeactivateStyle.buttonText,
              {color: color.lightBlack},
            ]}>
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeactivation}
          style={twoFaDeactivateStyle.confirmButton}>
          <Text style={[twoFaDeactivateStyle.confirmButtonText]}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoFaDeactivate;
