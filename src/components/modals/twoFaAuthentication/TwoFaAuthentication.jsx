import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Loader from '../../loader/Loader';
import { authToken } from '../../../data/redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from '../../../utils/toast';
import { login } from '../../../data/services/api/authApi';
import GradientButton from '../../buttons/GradientButton';
import InputBoxes from '../../common/inputboxes/InputBoxes';
import { color } from '../../../constants/colors';
import { twoFaAuthenticationStyle } from './twoFaAuthenticationStyle';
import { userLogin } from '../../../data/services/authApi';

const TwoFaAuthentication = ({
  open,
  closeModal,
  text,
  userData,
  dismiss,
  // handleInputChange,
  // handleLoginViaOtp,
  // errorMessage,
  // isLoading,
}) => {


  const [inputCode,setInputCode] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const {colors} = useTheme();
  const dispatch = useDispatch()


  const handleInputChange = otpValue => {
    setInputCode(otpValue);
    setErrorMessage("")
  };

  // handleSendOtp in Login Api

  const handleLoginViaOtp = async () => {
    try {
      const requiredData = {
        email: userData.email,
        password: userData.password,
        otp: inputCode,
      };
      setIsLoading(true);
      const {data} = await userLogin(requiredData);
      await AsyncStorage.setItem('Token', data?.access_token);
      await AsyncStorage.setItem('refreshToken', data?.refresh_token);
      dispatch(authToken(data?.access_token));
      dismiss()
      // setLoginData(data);
      // setOtpModal(false);
      // setIsOpen(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error?.response?.data?.detail);
    }
  };

  return (
    // <Modal
    //   transparent={true}
    //   animationType="fade"
    //   isVisible={open}
    //   style={twoFaAuthenticationStyle.modal}
    //   onBackdropPress={closeModal}>
    <View
        style={[
          twoFaAuthenticationStyle.innerModal,
          ,
        ]}>
          <Loader loading={isLoading} />
        <Text style={[twoFaAuthenticationStyle.mainText, {color: color.lightBlack}]}>
          {' '}
          Authorization Otp has been sent to your {userData.verification_type} ?
        </Text>
        <InputBoxes onOtpChange={handleInputChange} />
        <TouchableOpacity>
          <Text style={twoFaAuthenticationStyle.resendOtpText}>resend Otp</Text>
        </TouchableOpacity>
        <Text style={twoFaAuthenticationStyle.errorMessageStyle}>
          {errorMessage ? errorMessage : null}
        </Text>
        <GradientButton text="Confirm" action={handleLoginViaOtp} />
        <TouchableOpacity
          onPress={()=>dismiss()}
          style={twoFaAuthenticationStyle.cancelButton}>
          <Text
            style={[twoFaAuthenticationStyle.buttonText, {color: colors.text}]}>
            No
          </Text>
        </TouchableOpacity>
      </View>
    // </Modal>
  );
};

export default TwoFaAuthentication;
