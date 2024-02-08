import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../constants/fontSize';



export const twoFAuthenticationStyle = StyleSheet.create({
  twoFAuthenticationMain: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
    backgroundColor: color.white,
  },
  authenticationMainText: {
    fontFamily: fonts.medium,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p4, 667),
    marginVertical: verticalScale(30),
  },
  authenticationOptionWrapper: {
    marginVertical: verticalScale(5),
    backgroundColor: color.shadowGrey,
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(12),
  },
  authenticationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15),
    borderBottomWidth: 1,
    borderColor: color.grey,
  },
  authenticationOptionHeading: {
    fontFamily: fonts.semiBold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
  },
  authenticationOptionText: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p6, 667),
    marginTop: verticalScale(3),
    fontWeight: '500',
  },
  authenticationOptionRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '22%',
  },
});
