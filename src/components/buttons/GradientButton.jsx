import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from '../../constants/dimension';
import {color} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {sizes} from '../../constants/fontSize';

const GradientButton = ({text, action}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={action}>
      <LinearGradient
        colors={['#3A86FF', '#1C28AA']}
        start={{x: 0, y: 1}}
        end={{x: 1.3, y: 0}}
        style={styles.buttonView}>
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

export const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    borderRadius: 10,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(2),
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: color.white,
    fontSize: RFValue(sizes.p2, 667),
  },
});
