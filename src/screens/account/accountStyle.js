import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../constants/fontSize';
import { fonts } from '../../constants/fonts';


export const accountStyle = StyleSheet.create({
  accountMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
  },
  accountHeader: {
    paddingVertical: verticalScale(10),
  },
  accountHeaderText: {
    fontFamily: fonts.semiBold,
    color: color.lightBlack,
    fontSize: RFValue(sizes.h7, 667),
  },
  profileView: {
    height: verticalScale(230),
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
    backgroundColor: color.white,
    borderRadius: moderateScale(10),
  },
  userImage: {
    height: verticalScale(90),
    width: '100%',
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginBottom: verticalScale(12),
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
  userName: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h5, 667),
    color: color.lightBlack,
  },
  accountSettings:{
    borderWidth:1,
    borderColor:color.grey,
    backgroundColor:color.lightSkyBlue,
    borderRadius:moderateScale(10),
    paddingHorizontal:horizontalScale(10),
    marginBottom:verticalScale(20)
  },

  logOutMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
  },
  logOutItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutItemTextView: {
    marginLeft: horizontalScale(18),
  },
  textHeading: {
    fontFamily: fonts.semiBold,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p2, 667),
    marginBottom: verticalScale(3),
    fontWeight:"500"
  },
  textDetail: {
    fontFamily: fonts.regular,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p6, 667),
  },

  
  instructionView: {
    backgroundColor: color.yellow,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(10),
    marginBottom:verticalScale(10)
  },
  instructionTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  instructionTextView: {
    width: "93%",
    marginLeft:horizontalScale(10),
  },
  instructionText: {
    fontFamily: fonts.medium,
    color: color.white,
    fontSize: RFValue(sizes.p5, 667),
  },
  instructionButton: {
    backgroundColor: color.white,
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  instructionButtonText: {
    fontFamily: fonts.medium,
    color: color.yellow,
  },
  
});
