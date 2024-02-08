import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';


export const notificationStyle = StyleSheet.create({
  notificationMain: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
  },
  notificationOptionView: {
    backgroundColor: color.lightSkyBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(15),
    marginTop: verticalScale(20),
    borderWidth: 1,
    borderColor: color.grey,
  },

  notificationOptionWrapper: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(10),
    backgroundColor: color.lightSkyBlue,
    borderWidth:1
  },

  notificationGroupOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(15),
    borderBottomWidth: 1,
    borderColor: color.grey,
  },
  optionText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p3, 667),
  },
  informationText: {
    fontFamily: fonts.regular,
    color: color.black,
  },
});
