import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {loginStyle} from './loginStyle';
import {useForm, Controller} from 'react-hook-form';
import {images} from '../../../constants/images';
// import LoginSuccess from '../../../components/modals/loginSuccess/LoginSuccess';
// import BiometricSheet from '../../../components/bottomSheets/biometricSheet/BiometricSheet';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
// import {isEmailValid, isPasswordValid} from '../../../utils/helper';
import {toast} from '../../../utils/toast';
import GradientButton from '../../../components/buttons/GradientButton';
import {showModal} from '@whitespectre/rn-modal-presenter';
import {authRoutes} from '../../../constants/routes';
import {color} from '../../../constants/colors';
import {userLogin} from '../../../data/services/authApi';
import Loader from '../../../components/loader/Loader';
import {isEmailValid, isPasswordValid} from '../../../utils/helper';
import {useDispatch} from 'react-redux';
import {authToken} from '../../../data/redux/slice/authSlice';
import TwoFaOptionModal from '../../../components/modals/twoFaOptionModal/TwoFaOptionModal';
import TwoFaAuthentication from '../../../components/modals/twoFaAuthentication/TwoFaAuthentication';

const Login = ({navigation}) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm();

  // States
  // const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalText, setModalText] = useState('');

  // Other Values
  const dispatch = useDispatch();
  // const {switchValue} = useSelector(state => state.switch);
  const {colors} = useTheme();
  const paddingValue = Platform.OS === 'ios' ? 14 : 9;

  // // Success Modal
  // const successModalClose = () => {
  //   setIsOpen(false);
  //   // navigation.navigate("Bottom Stack",{screen:"Login"})
  // };

  // BottomSheet Open & Close

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // handleLogin (Login without the 2FA)

  const handleLogin = async data => {
    if (data.email.includes('@')) {
      userData = {
        email: data.email,
        password: data.password,
      };
    } else if (!isNaN(data.email)) {
      userData = {
        phone: data.email,
        password: data.password,
      };
    } else {
      toast({type:"error",text1:"Please provide a valid email or phone number."}) 
    }
    try {
      setIsLoading(true);
      const {data} = await userLogin(userData);
      if (
        data?.results?.is_2fa_sms_enabled === true &&
        data?.results?.is_2fa_email_enabled === true
      ) {
        // showModal(TwoFaOptionModal,{})
        // setOptionModal(true)
        showModal(TwoFaOptionModal, {data, userData});

        if (data?.results?.is_2fa_sms_enabled) {
          setModalText('Mobile Number');
        } else if (data?.results?.is_2fa_sms_enabled) {
          setModalText('Email');
        }

        await AsyncStorage.setItem(
          'sms_enabled',
          JSON.stringify(data?.results?.is_2fa_sms_enabled),
        );
        await AsyncStorage.setItem(
          'email_enabled',
          JSON.stringify(data?.results?.is_2fa_email_enabled),
        );
      } else if (
        data?.results?.is_2fa_sms_enabled === true ||
        data?.results?.is_2fa_email_enabled === true
      ) {
        const requiredData = {
          email: userData.email,
          password: userData.password,
          verification_type: data?.results?.is_2fa_sms_enabled
            ? 'phone'
            : 'email',
        };
        await AsyncStorage.setItem(
          'sms_enabled',
          JSON.stringify(data?.results?.is_2fa_sms_enabled),
        );
        await AsyncStorage.setItem(
          'email_enabled',
          JSON.stringify(data?.results?.is_2fa_email_enabled),
        );
        await userLogin(requiredData);
        showModal(TwoFaAuthentication, {userData: requiredData});
        setModalText(
          data?.results?.is_2fa_sms_enabled ? 'Mobile Number' : 'Email',
        );
      } else if (data.access_token) {
        // setLoginData(data);
        await AsyncStorage.setItem('Token', data?.access_token);
        await AsyncStorage.setItem('refreshToken', data?.refresh_token);
        dispatch(authToken(data?.access_token));
        // setIsOpen(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const errorMessage = error?.response?.data.detail || 'An error occurred';
      toast({type: 'error', text1: errorMessage});
    }
  };

  // handleLogin

  // const handleLogin = async data => {
  //   const userData = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   try {
  //     setIsLoading(true);
  //     const {data} = await userLogin(userData);
  //     await AsyncStorage.setItem('Token', data?.access_token);
  //     await AsyncStorage.setItem("RefreshToken",data?.refresh_token)
  //     dispatch(authToken(data?.access_token));
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log("error",error.response.data)
  //     setIsLoading(false);
  //     toast({type: 'error', text1: error.response.data.detail});
  //   }
  // };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
      style={[loginStyle.loginMain, {backgroundColor: color.lightSkyBlue}]}>
      <StatusBar barStyle="dark-content" backgroundColor={color.lightSkyBlue} />
      {/* <BiometricSheet open={open} closeModal={handleClose} /> */}
      <Loader loading={isLoading} />
      <View style={loginStyle.logoView}>
        {/* {switchValue === false ? (
          <images.LoginLogo />
        ) : (
          <images.DarkLoginLogo />
        )} */}
      </View>
      <View style={loginStyle.loginHeadingView}>
        <Text style={[loginStyle.loginHeadingtext, {color: colors.text}]}>
          Login
        </Text>
      </View>
      <View style={loginStyle.formView}>
        <Text style={[loginStyle.inputHeading, {color: colors.text}]}>
          Email/Phone number
        </Text>
        <View>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email or Phone is Required',
              // validate: value =>
              //   isEmailValid(value) || 'Please Enter Valid Email',
            }}
            render={({field}) => (
              <View style={loginStyle.inputBoxView}>
                <TextInput
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[loginStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="example"></TextInput>
              </View>
            )}></Controller>
          {errors.email && (
            <Text style={loginStyle.errorText}>{errors.email.message}</Text>
          )}
        </View>

        <View style={loginStyle.passwordView}>
          <Text style={[loginStyle.inputHeading, {color: colors.text}]}>
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is Required',
            }}
            render={({field}) => (
              <View style={loginStyle.inputBoxView}>
                <TextInput
                  value={field.value}
                  secureTextEntry
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[loginStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="example"></TextInput>
              </View>
            )}></Controller>
          {errors.password && (
            <Text style={loginStyle.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <GradientButton text="Login" action={handleSubmit(handleLogin)} />
        <View style={loginStyle.createAccountView}>
          <TouchableOpacity
          // onPress={() => navigation.navigate(authRoutes.ForgotPassword)}
          >
            <Text style={loginStyle.createAccountText}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={loginStyle.signupView}>
        <Text style={loginStyle.signupText}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(authRoutes.Signup)}>
          <Text style={loginStyle.signupButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyle.biometricLogoView}>
        {/* {switchValue === false ? (
          <images.BiometricLogo />
        ) : (
          <images.DarkLoginBiometric />
        )} */}

        {/* <TouchableOpacity >
          <Text style={[loginStyle.biometricText, {color: colors.text}]}>
            Login with biometric
          </Text>
        </TouchableOpacity> */}
      </View>
      <View></View>
    </ScrollView>
  );
};

export default Login;
