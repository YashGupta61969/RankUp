import {StyleSheet} from 'react-native';
import {color} from '../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {fonts} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';

export const internetScreenStyle = StyleSheet.create({
  internetScreenMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.white,
  },
  internetScreenTopText: {
    marginVertical: verticalScale(20),
  },
  imageView: {
    position: 'absolute',
    bottom: 0,
  },
  networkTextOne: {
    fontFamily: fonts.semiBold,
    color: color.red,
    textAlign: 'center',
    fontSize: RFValue(sizes.h8, 667),
    marginVertical: verticalScale(10),
  },
  networkTextTwo: {
    fontFamily: fonts.semiBold,
    color: color.red,
    textAlign: 'center',
    fontSize: RFValue(sizes.h8, 667),
    marginVertical: verticalScale(10),
  },
  networkTextThree:{
    fontFamily: fonts.semiBold,
    color: color.black,
    textAlign: 'center',
    fontSize: RFValue(sizes.p4, 667),
    marginVertical: verticalScale(10),
  },
  internetText: {
    marginBottom: verticalScale(30),
    fontFamily: fonts.medium,
    color: color.black,
  },
  touchableButton: {
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#438e67',
  },
  touchableText: {
    fontFamily: fonts.medium,
    color: color.white,
  },
});
