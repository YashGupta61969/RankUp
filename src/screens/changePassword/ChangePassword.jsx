import {View, Text, TextInput, Platform, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {Controller, useForm} from 'react-hook-form';
import {isPasswordValid} from '../../utils/helper';
import {toast} from '../../utils/toast';
import Loader from '../../components/loader/Loader';
import {useTheme} from '@react-navigation/native';
import {verticalScale} from '../../constants/dimension';
import GradientButton from '../../components/buttons/GradientButton';
import {changePasswordStyle} from './changePasswordStyle';
import {color} from '../../constants/colors';
import {changePassword} from '../../data/services/authApi';

const padding = Platform.OS === 'ios' ? 14 : 9;
const ChangePassword = ({navigation}) => {
  // States

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {colors} = useTheme();

  // handleChangePassword

  const handleChangePassword = async data => {
    if (data.old_password === data.password) {
      toast({type: 'error', text1: 'New & Current Passwords are same'});
      return;
    }
    if (data.password !== data.confirm_password) {
      toast({
        type: 'error',
        text1: ' Your New & Confirm Passwords are not same',
      });
      return;
    }

    const userData = {
      old_password: data.old_password,
      new_password: data.password,
      confirm_password: data.confirm_password,
    };
    try {
      setLoading(true);
      const {data} = await changePassword(userData);
      toast({type: 'success', text1: data?.detail});
      setLoading(false);
      setTimeout(() => {
        navigation.goBack();
      }, 3000);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error?.response?.data?.detail});
    }
  };

  return (
    <View
      style={[
        changePasswordStyle.changePasswordMain,

      ]}>
      <ChildStackHeader
        text={accountRoutes.ChangePassword}
        textColor={color.lightBlack}
      />
      <Loader loading={loading} />
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          paddingVertical: verticalScale(5),
        }}>
        <View style={changePasswordStyle.informationView}>
          <View style={changePasswordStyle.informationDetailWrapper}>
            <Text
              style={[
                changePasswordStyle.informationTextHeading,
                {color: colors.text},
              ]}>
              Input old password
            </Text>
            <Controller
              control={control}
              name="old_password"
              rules={{
                required: ' Old Password is Required',
                validate: value =>
                  isPasswordValid(value) || 'Please Enter Valid Password',
              }}
              render={({field}) => (
                <TextInput
                  value={field.value}
                  secureTextEntry
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[changePasswordStyle.inputbox, {padding: padding}]}
                  placeholder="***********"></TextInput>
              )}></Controller>
            {errors.old_password && (
              <Text style={changePasswordStyle.errorText}>
                {errors.old_password.message}
              </Text>
            )}
          </View>
          <View style={changePasswordStyle.informationDetailWrapper}>
            <Text
              style={[
                changePasswordStyle.informationTextHeading,
                {color: colors.text},
              ]}>
              Add new password
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
                <TextInput
                  value={field.value}
                  secureTextEntry
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[changePasswordStyle.inputbox, {padding: padding}]}
                  placeholder="************"></TextInput>
              )}></Controller>
            {errors.password && (
              <Text style={changePasswordStyle.errorText}>
                {errors.password.message}
              </Text>
            )}
          </View>

          <View style={changePasswordStyle.informationDetailWrapper}>
            <Text
              style={[
                changePasswordStyle.informationTextHeading,
                {color: colors.text},
              ]}>
              Confirm new password
            </Text>
            <Controller
              control={control}
              name="confirm_password"
              render={({field}) => (
                <TextInput
                  value={field.value}
                  secureTextEntry
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={[changePasswordStyle.inputbox, {padding: padding}]}
                  placeholder="***********"></TextInput>
              )}></Controller>
          </View>
        </View>

        {/* Button */}

        <View style={changePasswordStyle.buttonMainView}>
          <GradientButton
            text="Update Password"
            action={handleSubmit(handleChangePassword)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
