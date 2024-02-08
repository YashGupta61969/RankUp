import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {fonts} from '../../constants/fonts';
import {color} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';

export const homeStyle = StyleSheet.create({
  homeMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    paddingTop: verticalScale(10),
  },
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageMain: {
    borderWidth: 1,
    height: verticalScale(40),
    width: horizontalScale(48),
    borderRadius: moderateScale(30),
    overflow:"hidden"
  },
  userText: {
    fontFamily: fonts.semiBold,
    color: color.lightBlack,
    fontSize: RFValue(sizes.h8, 667),
    marginLeft: horizontalScale(15),
  },
  informationText: {
    fontFamily: fonts.regular,
    color: color.lightBlack,
    marginVertical: verticalScale(20),
    fontSize: RFValue(sizes.p3, 667),
  },
  opbView: {
    backgroundColor: color.darkSkyBlue,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(12),
    paddingHorizontal: horizontalScale(10),
  },
  opbText: {
    fontFamily: fonts.regular,
    color: color.white,
    fontSize: RFValue(sizes.p3, 667),
    width: '88%',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
  },
  buttonMain: {
    borderWidth: 1,
    borderColor: color.darkSkyBlue,
    width: '48%',
    height: verticalScale(100),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(15),
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.p2, 667),
    color: color.darkSkyBlue,
    marginTop: verticalScale(5),
  },
});
