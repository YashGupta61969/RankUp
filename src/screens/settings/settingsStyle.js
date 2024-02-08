import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';


export const settingsStyle = StyleSheet.create({
  settingsSecurityMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
  },
  settingOptionMain: {
    backgroundColor: color.lightSkyBlue,
    borderWidth: 1,
    borderColor: color.grey,
    paddingLeft: horizontalScale(12),
    paddingRight: horizontalScale(8),
    marginTop: verticalScale(20),
    borderRadius: moderateScale(12),
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(14),
    borderBottomWidth: 1,
    borderColor: color.grey,
  },
  settingTextHeading: {
    fontFamily: fonts.semiBold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
  },
  settingTextInformation: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p6, 667),
    marginTop: verticalScale(3),
    fontWeight:"500"
  },
  settingRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '22%',
  },
});
