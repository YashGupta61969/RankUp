import {View, Text} from 'react-native';
import React from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {notificationStyle} from './notificationStyle';
import {accountRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import {useTheme} from '@react-navigation/native';
import CustomSwitchButton from '../../components/accounts/CustomSwitchButton';

const Notification = () => {
  return (
    <View
      style={[
        notificationStyle.notificationMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader
        text={accountRoutes.Notification}
        textColor={color.lightBlack}
      />

      <View
        style={[
          notificationStyle.notificationOptionView,
          {backgroundColor: color.lightSkyBlue, borderColor: color.grey},
        ]}>
        <Text style={[notificationStyle.optionText, {color: color.lightBlack}]}>
          Enable Notification
        </Text>
        <CustomSwitchButton />
      </View>

      <View
        style={[
          notificationStyle.notificationOptionWrapper,
          {backgroundColor: color.lightSkyBlue, borderColor: color.grey},
        ]}>
        <View
          style={[
            notificationStyle.notificationGroupOption,
            {borderColor: color.grey},
          ]}>
          <Text
            style={[notificationStyle.optionText, {color: color.lightBlack}]}>
            Show app icon badge
          </Text>
          <CustomSwitchButton />
        </View>
        <View
          style={[
            notificationStyle.notificationGroupOption,
            {borderColor: color.grey},
          ]}>
          <Text
            style={[notificationStyle.optionText, {color: color.lightBlack}]}>
            Floating Notification
          </Text>
          <CustomSwitchButton />
        </View>
        <View
          style={[
            notificationStyle.notificationGroupOption,
            {borderColor: color.grey},
          ]}>
          <Text
            style={[notificationStyle.optionText, {color: color.lightBlack}]}>
            Enable Notification
          </Text>
          <CustomSwitchButton />
        </View>
        <View
          style={[
            notificationStyle.notificationGroupOption,
            {borderColor: color.grey},
          ]}>
          <View>
            <Text
              style={[notificationStyle.optionText, {color: color.lightBlack}]}>
              Allow Sound
            </Text>
            <Text
              style={[
                notificationStyle.informationText,
                {color: color.lightBlack},
              ]}>
              Allow notifications on lock screen
            </Text>
          </View>
          <CustomSwitchButton />
        </View>
        <View
          style={[
            notificationStyle.notificationGroupOption,
            {borderBottomWidth: 0},
          ]}>
          <Text
            style={[notificationStyle.optionText, {color: color.lightBlack}]}>
            Allow Vibration
          </Text>
          <CustomSwitchButton />
        </View>
      </View>
    </View>
  );
};

export default Notification;
