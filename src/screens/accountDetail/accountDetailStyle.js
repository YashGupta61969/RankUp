import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';


export const accountDetailStyle = StyleSheet.create({
  accountDetailMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(8),
  },
  profileView: {
    marginVertical: verticalScale(10),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userProfile: {
    width: "36%",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.lightGrey,
    borderRadius: moderateScale(10),
  },
  userImage: {
    height: verticalScale(90),
    width: '100%',
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginBottom: verticalScale(6),
  },
  editButtonMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: color.lightBlack,
  },
  editText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p2, 667),
    color: color.lightBlack,
  },
  userDetailView: {
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.lightGrey,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(10),
  },
  
  userDetailTouchableItem: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: horizontalScale(7),
  },
  detailHeading: {
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.p7, 667),
    color: color.blue_brand,
  },
  userDetailText: {
    fontFamily: fonts.semiBold,
    marginTop: verticalScale(4),
    color: color.blue_brand,
    fontSize: RFValue(sizes.p4, 667),
  },
});
