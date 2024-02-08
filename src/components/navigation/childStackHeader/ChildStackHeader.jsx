import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {childHeaderStyle} from './childStackHeaderStyle';
import {icons} from '../../../constants/icons';
import {useNavigation, useTheme} from '@react-navigation/native';
import {color} from '../../../constants/colors';

const ChildStackHeader = ({text, textColor}) => {
  const navigation = useNavigation();


  return (
    <View style={childHeaderStyle.childHeaderMain}>
      <View style={childHeaderStyle.childHeaderInnerView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            childHeaderStyle.leftButtonView,
            {backgroundColor: color.brightGray},
          ]}>
          <icons.LeftArrow width={20} height={20} />
        </TouchableOpacity>
        <View style={childHeaderStyle.textView}>
          <Text style={[childHeaderStyle.headerText, {color: textColor}]}>
            {text}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: '12%',
            opacity: 0,
            height: '100%',
          }}></View>
      </View>
    </View>
  );
};

export default ChildStackHeader;
