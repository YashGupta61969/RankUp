import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../constants/fontSize';


export const policiesStyle = StyleSheet.create({
  policiesMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    paddingTop: verticalScale(10),
  },
  optionWrapper: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
  },
  optionWraaperItem: {
    paddingVertical: verticalScale(14),
  },
  optionText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p4, 667),
  },
});
