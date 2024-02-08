import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { color } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';



export const termsAndConditionStyle = StyleSheet.create({
  termsAndConditionMain: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
    backgroundColor: color.white,
  },
  termsAndConditionPage: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: color.lightSkyBlue,
    marginBottom: verticalScale(5),
    paddingTop: verticalScale(10),
  },
  termsAndConditionsTop: {
    marginTop: verticalScale(5),
  },
  termsAndConditionText: {
    fontFamily: fonts.medium,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
  },
  termsAndService: {
    fontFamily: fonts.bold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
    marginVertical: verticalScale(4),
  },
  updatedText: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
  },
  agreementView: {
    marginVertical: verticalScale(13),
  },
  agreementText: {
    fontFamily: fonts.semiBold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p4, 667),
  },
  agreementDescription: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p5, 667),
    width: '97%',
    fontWeight: '600',
    lineHeight: verticalScale(16),
  },
  countText: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p5, 667),
  },
  tableContentsText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p2, 667),
    marginVertical: verticalScale(20),
  },
  conditionHeading: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p2, 667),
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
});
