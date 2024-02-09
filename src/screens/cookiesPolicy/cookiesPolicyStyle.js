import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';
import {color} from "../../constants/colors"

export const cookiesPolicyStyle = StyleSheet.create({
  cookiesMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    paddingTop: verticalScale(10),
    backgroundColor:color.white
  },
  detailWrapper: {  
    paddingVertical: verticalScale(10),
    borderWidth: 1,
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  detailHeading: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p4, 667),
  },
  detailText: {
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.p5, 667),
  },
  dotDetailView: {
    flexDirection: 'row',
  },
  dotStyle: {
    width: 4,
    height: 4,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(5),
    marginRight: horizontalScale(8),
  },
});
