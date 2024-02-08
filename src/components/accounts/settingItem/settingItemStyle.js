import {StyleSheet} from 'react-native';
import { color } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { sizes } from '../../../constants/fontSize';
import { horizontalScale, verticalScale } from '../../../constants/dimension';
import { RFValue } from 'react-native-responsive-fontsize';


export const settingItemStyle = StyleSheet.create({
  settingsItemMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: verticalScale(12),
    borderColor: color.grey,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsItemTextView: {
    marginLeft: horizontalScale(13),
  },
  textHeading: {
    fontFamily: fonts.semiBold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
    marginBottom: verticalScale(3),
    fontWeight:"500"
  },
  textDetail: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p6, 667),
  },
  
});
