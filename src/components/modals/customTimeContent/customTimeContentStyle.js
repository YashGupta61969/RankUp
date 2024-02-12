import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../constants/dimension';
import { color } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { sizes } from '../../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';


export const customTimeContentStyle = StyleSheet.create({
  innerModal: {
    backgroundColor: color.white,
    width: '90%',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth:1
  },
  innerModalTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(15),
    borderBottomWidth: 1,
    borderColor: color.grey,
    paddingVertical: verticalScale(5),
  },
  headingText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p2, 667),
  },
  innerModalCenter: {
    borderBottomWidth: 1,
    borderColor: color.grey,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(5),
  },

  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(6),
  },
  timeText: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },
  input: {
    width: '60%',
    backgroundColor: color.grey,
    borderRadius: moderateScale(5),
    color: color.black,
    fontFamily: fonts.semiBold,
  },
  buttonView: {
    borderColor: color.grey,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
  },
  deleteButton: {
    backgroundColor: color.red,
    width: '45%',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: color.white,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p3, 667),
  },
  cancelButton: {
    borderWidth: 1.5,
    borderColor: color.darkBlue,
    width: '45%',
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: color.darkBlue,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p3, 667),
  },
});
