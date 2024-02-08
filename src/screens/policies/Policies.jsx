import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {useTheme} from '@react-navigation/native';
import {policiesStyle} from './policiesStyle';

const Policies = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={policiesStyle.policiesMain}>
      <ChildStackHeader text={accountRoutes.Policies} textColor={colors.text} />

      <View
        style={[
          policiesStyle.optionWrapper,
          {borderColor: colors.cardBorder, backgroundColor: colors.screenCard},
        ]}>
        <TouchableOpacity
          style={[
            policiesStyle.optionWraaperItem,
            {borderBottomWidth: 1, borderColor: colors.cardBorder},
          ]}
          onPress={() => navigation.navigate(accountRoutes.PrivacyPolicies)}>
          <Text style={[policiesStyle.optionText, {color: colors.text}]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={policiesStyle.optionWraaperItem}
          onPress={() => navigation.navigate(accountRoutes.CookiesPolicies)}>
          <Text style={[policiesStyle.optionText, {color: colors.text}]}>
            Cookies Policy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Policies;
