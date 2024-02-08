import { View, Text } from 'react-native'
import React from 'react'
import { accountDetailsItemsStyle } from './accountDetailsItemsStyle'
import { useTheme } from '@react-navigation/native'
import { color } from '../../../constants/colors'

const AccountDetailsItems = ({textHeading,text}) => {


  return (
    <View
            style={[
              accountDetailsItemsStyle.userDetailItem,
              {borderColor: color.lightSkyBlue},
            ]}>
            <Text
              style={[accountDetailsItemsStyle.detailHeading, {color: color.lightBlack}]}>
              {textHeading}
            </Text>
            <Text
              style={[accountDetailsItemsStyle.userDetailText, {color: color.lightBlack}]}>
              {text ? text : "NA"}
            </Text>
          </View>
  )
}

export default AccountDetailsItems