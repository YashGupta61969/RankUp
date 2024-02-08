import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import {termsAndPolicyStyle} from './termsAndPolicyStyle';
import {icons} from '../../constants/icons';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const TermsAndPolicy = ({navigation}) => {
  const {colors} = useTheme()
  // const {switchValue} = useSelector(state=>state.switch)
  return (
    <View style={[termsAndPolicyStyle.termsAndPolicyMain,{backgroundColor:color.white}]}>
      <ChildStackHeader
        text={accountRoutes.TermsAndPolicy}
        textColor={colors.text}
      />
      <View style={[termsAndPolicyStyle.termsAndPolicyOptions,{backgroundColor:color.lightSkyBlue,borderColor:color.grey}]}>
        <TouchableOpacity
          onPress={() => navigation.navigate(accountRoutes.TermsAndConditions)}
          activeOpacity={1}
          style={[termsAndPolicyStyle.termsAndPolicyOptionsItem,{borderColor:color.grey}]}>
          <Text style={[termsAndPolicyStyle.termsAndPolicyOptionsItemText,{color:color.lightBlack}]}>
            Terms & Conditions
          </Text>
          {/* {switchValue ===false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
          
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(accountRoutes.Policies)}
          activeOpacity={1}
          style={[termsAndPolicyStyle.termsAndPolicyOptionsItem,{borderColor:color.grey}]}>
          <Text style={[termsAndPolicyStyle.termsAndPolicyOptionsItemText,{color:color.lightBlack}]}>
            Policies
          </Text>
          {/* {switchValue ===false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate(accountRoutes.FAQs)}
          activeOpacity={1}
          style={[termsAndPolicyStyle.termsAndPolicyOptionsItem,{borderColor:color.grey}]}>
          <Text style={[termsAndPolicyStyle.termsAndPolicyOptionsItemText,{color:color.lightBlack}]}>
            FAQs
          </Text>
          {/* {switchValue ===false ? <icons.RightArrow width={18} height={18} />:<icons.RightArrowLight width={22} height={22} />} */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsAndPolicy;
