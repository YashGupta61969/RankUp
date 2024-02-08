import {StyleSheet} from 'react-native';
import {color} from '../../constants/colors';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../constants/fonts';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';


export const privacyPoliciesStyle = StyleSheet.create({
  privacyPoliciesMain: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
    backgroundColor: color.white,
  },
  privacyPoliciesPage: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(30),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: color.lightSkyBlue,
  },
  termsAndConditions: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p4, 667),
  },
  overViewText: {
    fontFamily: fonts.semiBold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p4, 667),
    marginVertical: verticalScale(10),
  },
  privacyHeading:{
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p3, 667),
  },
  privacyDescription:{
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p5, 667),
    width: '97%',
    fontWeight: '600',
    lineHeight: verticalScale(16),
  },
  QuestionHeading:{
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p3, 667),
  },
  dotTextView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dot: {
    backgroundColor: color.black,
    width: 3,
    height: 3,
    borderRadius: 10,
    marginTop: verticalScale(8),
    marginRight: horizontalScale(4),
  },
  countText: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p5, 667),
  },
});
