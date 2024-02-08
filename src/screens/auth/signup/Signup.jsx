import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {signupStyle} from './signupStyle';
import Loader from '../../../components/loader/Loader';
import {useForm, Controller} from 'react-hook-form';
import {color} from '../../../constants/colors';
import GradientButton from '../../../components/buttons/GradientButton';
import {authRoutes} from '../../../constants/routes';
import {isEmailValid, isPasswordValid} from '../../../utils/helper';
import {useDispatch} from 'react-redux';
import CountryCodePicker from '../../../components/CountryCodePicker';
import {horizontalScale} from '../../../constants/dimension';
import {toast} from '../../../utils/toast';
import { signUpUser } from '../../../data/services/authApi';

const Signup = ({navigation}) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const paddingValue = Platform.OS === 'ios' ? 14 : 9;
  const dispatch = useDispatch();

  const handleSignup = async data => {
    if (data.confirmPassword !== data.password) {
      toast({
        type: 'error',
        text1: 'Password and Confirm Password not matched',
      });
      return;
    }
    const userData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: `${countryCode}${data.phone}`,
      password: data.password,
      username: data.email,
    };
    try {
      setIsLoading(true);
      const {data} = await signUpUser(userData);
      setIsLoading(false);
      if(data){
        toast({type: 'success', text1: data.detail});
      }
    } catch (error) {
      setIsLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
      style={[signupStyle.loginMain, {backgroundColor: color.lightSkyBlue}]}>
      <StatusBar barStyle="dark-content" backgroundColor={color.lightSkyBlue} />
      {/* <BiometricSheet open={open} closeModal={handleClose} /> */}
      <Loader loading={isLoading} />
      <View style={signupStyle.logoView}>
        {/* {switchValue === false ? (
        <images.LoginLogo />
      ) : (
        <images.DarkLoginLogo />
      )} */}
      </View>
      <View style={signupStyle.loginHeadingView}>
        <Text style={[signupStyle.loginHeadingtext, {color: color.lightBlack}]}>
          SignUp
        </Text>
      </View>
      <View style={signupStyle.formView}>
        <View>
          <Text style={[signupStyle.inputHeading, {color: color.lightBlack}]}>
            First name
          </Text>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: 'Firstname is Required',
            }}
            render={({field}) => (
              <View style={signupStyle.inputBoxView}>
                <TextInput
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[signupStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="First Name"></TextInput>
              </View>
            )}></Controller>
        </View>

        <View>
          <Text style={[signupStyle.inputHeading, {color: color.lightBlack}]}>
            Last name
          </Text>
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: 'LastName is Required',
            }}
            render={({field}) => (
              <View style={signupStyle.inputBoxView}>
                <TextInput
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[signupStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="last Name"></TextInput>
              </View>
            )}></Controller>
          {errors.LastName && (
            <Text style={signupStyle.errorText}>{errors.LastName.message}</Text>
          )}
        </View>

        <View>
          <Text style={[signupStyle.inputHeading, {color: color.lightBlack}]}>
            Email Address
          </Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is Required',
              validate: value =>
                isEmailValid(value) || 'Please Enter Valid Email',
            }}
            render={({field}) => (
              <View style={signupStyle.inputBoxView}>
                <TextInput
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[signupStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="example"></TextInput>
              </View>
            )}></Controller>
          {errors.email && (
            <Text style={signupStyle.errorText}>{errors.email.message}</Text>
          )}
        </View>

        <View>
          <Text style={[signupStyle.inputHeading, {color: color.lightBlack}]}>
            Phone Number
          </Text>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Phone Number is Required',
            }}
            render={({field}) => (
              <View
                style={[
                  signupStyle.inputBoxView,
                  {paddingLeft: horizontalScale(0)},
                ]}>
                <View style={{width: '18%'}}>
                  <CountryCodePicker
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                  />
                </View>
                <TextInput
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[
                    signupStyle.input,
                    {paddingVertical: paddingValue, width: '82%'},
                  ]}
                  placeholder="example"></TextInput>
              </View>
            )}></Controller>

          {errors.phone && (
            <Text style={signupStyle.errorText}>{errors.email.message}</Text>
          )}
        </View>
        {/* <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <View style={{borderWidth:1,width:"20%"}}>
          <CountryCodePicker/>
          </View>
          <TextInput value={phone} onChangeText={(val)=>setPhone(val)} style={{width:"80%",borderWidth:1}}/>
        </View> */}

        <View style={signupStyle.passwordView}>
          <Text style={[signupStyle.inputHeading, {color: color.lightBlack}]}>
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is Required',
              validate: value =>
                isPasswordValid(value) || 'Please Enter Valid Password',
            }}
            render={({field}) => (
              <View style={signupStyle.inputBoxView}>
                <TextInput
                  value={field.value}
                  secureTextEntry
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[signupStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="example"></TextInput>
              </View>
            )}></Controller>
          {errors.password && (
            <Text style={signupStyle.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <View style={signupStyle.passwordView}>
          <Text style={[signupStyle.inputHeading, {color: color.lightBlack}]}>
            Confirm Password
          </Text>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirm Password is Required',
              validate: value =>
                isPasswordValid(value) || 'Please Enter Valid Password',
            }}
            render={({field}) => (
              <View style={signupStyle.inputBoxView}>
                <TextInput
                  value={field.value}
                  secureTextEntry
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[signupStyle.input, {paddingVertical: paddingValue}]}
                  placeholder="Confirm Password"></TextInput>
              </View>
            )}></Controller>
          {errors.passwrrd && (
            <Text style={signupStyle.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <GradientButton text="Sign Up" action={handleSubmit(handleSignup)} />
        <View style={signupStyle.createAccountView}>
          <Text style={signupStyle.accountText}>
            Already have an account ?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(authRoutes.Login)}>
            <Text style={signupStyle.createAccountText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={signupStyle.biometricLogoView}>
        {/* {switchValue === false ? (
        <images.BiometricLogo />
      ) : (
        <images.DarkLoginBiometric />
      )} */}

        {/* <TouchableOpacity >
        <Text style={[signupStyle.biometricText, {color: colors.text}]}>
          Login with biometric
        </Text>
      </TouchableOpacity> */}
      </View>
      <View></View>
    </ScrollView>
  );
};

export default Signup;
