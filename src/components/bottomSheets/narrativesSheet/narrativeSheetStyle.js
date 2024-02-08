import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../constants/dimension';
import { color } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { sizes } from '../../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';

export const narrativeSheetStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  innerModal: {
    backgroundColor: color.brightGray,
    width: '100%',
    paddingVertical: verticalScale(5),
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderTopEndRadius: moderateScale(25),
    borderTopLeftRadius: moderateScale(25),
  },
  topRectangleLine: {
    alignSelf: 'center',
    marginVertical: verticalScale(5),
  },
  profileTextView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p1, 667),
    paddingVertical: verticalScale(10),
  },
  profileOptions: {
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(26),
  },
  profileOptionsItem: {
    paddingVertical: verticalScale(15),
    borderBottomWidth: 1,
    borderColor: color.grey,
  },
  profileOptionsItemText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.p3, 667),
  },
  buttonView: {
    borderColor: color.grey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
  },
  dashboardButton: {
    backgroundColor: color.red,
    width: horizontalScale(320),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: color.white,
    fontFamily: fonts.medium,
  },
});
