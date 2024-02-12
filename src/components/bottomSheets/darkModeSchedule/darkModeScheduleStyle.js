import {StyleSheet} from 'react-native';
import { color } from '../../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../../constants/dimension';
import { fonts } from '../../../constants/fonts';
import { sizes } from '../../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';


export const darkModeScheduleStyle = StyleSheet.create({
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
    // borderWidth:1
  },
  topRectangleLine: {
    alignSelf: 'center',
    marginVertical: verticalScale(5),
  },

  mainText: {
    fontFamily: fonts.medium,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p1, 667),
    paddingVertical: verticalScale(10),
    alignSelf: 'center',
  },
  timeScheduleOptions: {
    paddingHorizontal: horizontalScale(25),
    borderTopWidth:1,
    borderColor:color.grey
  },
  timeOptionItem: {
    paddingVertical: verticalScale(12),
  },
  timeOptionItemText: {
    fontFamily: fonts.medium,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p3, 667),
  },
});
