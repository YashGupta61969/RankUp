import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {color} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';

export const narrativesStyle = StyleSheet.create({
  narrativesMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    backgroundColor: color.white,
  },
  narrativesMainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p1, 667),
    textAlign: 'center',
    paddingVertical: verticalScale(12),
  },
  narrativesTopView: {
    borderWidth: 0.3,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
    height: '66%',
    borderColor: color.darkSkyBlue,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(15),
  },
  OprEprView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.lightSkyBlue,
    paddingBottom: verticalScale(8),
    paddingHorizontal: horizontalScale(8),
    borderRadius: moderateScale(10),
  },
  tabView: {
    // width: '49%',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(7),
    marginRight:horizontalScale(10)
  },
  tabText: {
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    fontSize: RFValue(sizes.p4, 667),
  },
  dotViewMain: {
    backgroundColor: color.lightSkyBlue,
    width: '14%',
    height: verticalScale(35),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    alignSelf: 'flex-end',
  },
  dutyTitleWrapper: {
    backgroundColor: color.lightBlue2,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(8),
  },
  dutyTitleHeading: {
    fontFamily: fonts.semiBold,
    color: color.black,
    marginBottom: verticalScale(4),
    fontSize: RFValue(sizes.p3, 667),
  },
  dutyTitleDescription: {
    fontFamily: fonts.regular,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p5, 667),
  },

  narrativesBottomView: {
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(10),
    height: '20%',
    borderColor: color.darkSkyBlue,
    backgroundColor: color.lightSkyBlue,
    overflow: 'hidden',
  },
  createNarrativeButtonstyle: {
    alignItems: 'center',
    paddingVertical: verticalScale(19),
  },
  narrativeButtonText: {
    fontFamily: fonts.medium,
    color: color.white,
    fontSize: RFValue(sizes.p2, 667),
  },
  OPBEPBbuttonView: {
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  OPBButton: {
    borderWidth: 1,
    borderRadius: moderateScale(5),
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(9),
    justifyContent: 'center',
    borderColor: color.darkSkyBlue,
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: color.darkSkyBlue,
    marginLeft: horizontalScale(10),
    fontSize: RFValue(sizes.p3, 667),
  },
  actionDeleteButton: {
    backgroundColor: color.red,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(15),
    flexDirection:"row",
  },
  actionMergeButton:{
    backgroundColor: color.lightGreen,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(15),
    flexDirection:"row",

  },
  actionButtonText: {
    fontFamily: fonts.medium,
    color: color.white,
    marginLeft:horizontalScale(8)
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: color.darkSkyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(20),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(8),
  },
  cancelButtonText: {
    fontFamily: fonts.medium,
    color: color.darkSkyBlue,
  },
});
