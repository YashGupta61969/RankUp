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

export const forumStyle = StyleSheet.create({
  mergedMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    backgroundColor: color.white,
  },
  mergedMainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p1, 667),
    textAlign: 'center',
    paddingVertical: verticalScale(12),
  },
  instructionText:{
   fontFamily:fonts.regular,
   color:color.lightBlack,
   fontSize:RFValue(sizes.p5,667),
   marginVertical:verticalScale(15)
  },
  forumTopView: {
    borderWidth: 0.3,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(45),
    borderColor: color.darkSkyBlue,
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(15),
  },
  OprEprView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.lightSkyBlue,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(8),
    borderRadius: moderateScale(10),
  },
  tabView: {
    width: '49%',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(7),
  },
  tabText: {
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    fontSize: RFValue(sizes.p2, 667),
  },
  dotViewMain: {
    backgroundColor: color.lightSkyBlue,
    width: '14%',
    height: '6%',
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

  
});
