import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {settingsStyle} from './settingsStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {color} from '../../constants/colors';
import {icons} from '../../constants/icons';
import {verticalScale} from '../../constants/dimension';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {accountRoutes} from '../../constants/routes';
import CustomSwitchButton from '../../components/accounts/CustomSwitchButton';

const Settings = ({navigation}) => {
  const {colors} = useTheme();
  // const {switchValue} = useSelector(state=>state.switch)

  return (
    <View
      style={[
        settingsStyle.settingsSecurityMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader
        text={accountRoutes.Setting}
        textColor={color.lightBlack}
      />

      <View
        style={[
          settingsStyle.settingOptionMain,
          {backgroundColor: color.lightGrey, borderColor: color.grey},
        ]}>
        <TouchableOpacity
          onPress={() => navigation.navigate(accountRoutes.ChangePassword)}
          style={[settingsStyle.settingOption, {borderColor: color.grey}]}>
          <View>
            <Text
              style={[
                settingsStyle.settingTextHeading,
                {color: color.lightBlack},
              ]}>
              Change password
            </Text>
            <Text
              style={[
                settingsStyle.settingTextInformation,
                {color: color.lightBlack},
              ]}>
              Manage your password
            </Text>
          </View>
          {/* {switchValue === false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(accountRoutes.TwoFAuthentication)}
          style={[settingsStyle.settingOption, {borderColor: color.grey}]}>
          <View>
            <Text
              style={[
                settingsStyle.settingTextHeading,
                {color: color.lightBlack},
              ]}>
              2FA
            </Text>
            <Text
              style={[
                settingsStyle.settingTextInformation,
                {color: color.lightBlack},
              ]}>
              Setup your Two Factor Authentication
            </Text>
          </View>
          <icons.RightArrow width={18} height={18} />
          {/* {switchValue === false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            settingsStyle.settingOption,
            {borderColor: color.lightSkyBlue},
          ]}>
          <View>
            <Text
              style={[
                settingsStyle.settingTextHeading,
                {color: color.lightBlack},
              ]}>
              Biometric login
            </Text>
            <Text
              style={[
                settingsStyle.settingTextInformation,
                {color: color.lightBlack},
              ]}>
              Enable the use of your fingerprint or face ID
            </Text>
          </View>
          <View style={settingsStyle.settingRightView}>
            <CustomSwitchButton disable={true} />
            <icons.RightArrow width={18} height={18} />

            {/* {switchValue === false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            settingsStyle.settingOption,
            {paddingVertical: verticalScale(20), borderColor: color.grey},
          ]}>
          <Text
            style={[
              settingsStyle.settingTextHeading,
              {color: color.lightBlack},
            ]}>
            Location
          </Text>

          <View style={settingsStyle.settingRightView}>
            <CustomSwitchButton disable={true} />
            <icons.RightArrow width={18} height={18} />

            {/* {switchValue === false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            settingsStyle.settingOption,
            {borderColor: color.lightSkyBlue},
          ]}>
          <View>
            <Text
              style={[
                settingsStyle.settingTextHeading,
                {color: color.lightBlack},
              ]}>
              Stay Logged In
            </Text>
            <Text
              style={[
                settingsStyle.settingTextInformation,
                {color: color.lightBlack},
              ]}>
              Allow the app to work in the background
            </Text>
          </View>
          <CustomSwitchButton disable={true} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[settingsStyle.settingOption, {borderBottomWidth: 0}]}>
          <View>
            <Text
              style={[
                settingsStyle.settingTextHeading,
                {color: color.lightBlack},
              ]}>
              Remember Account
            </Text>
            <Text
              style={[
                settingsStyle.settingTextInformation,
                {color: color.lightBlack},
              ]}>
              Allow the app to save your login info
            </Text>
          </View>
          <CustomSwitchButton disable={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
