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

export const opbStyle = StyleSheet.create({
  opbMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    paddingTop: verticalScale(10),
    backgroundColor: color.white,
  },
  topOuterView: {
    borderWidth: 0.3,
    borderRadius: moderateScale(10),
    borderColor: color.darkSkyBlue,
    marginVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(18),
    paddingBottom: verticalScale(15),
  },
  topInnerView: {
    backgroundColor: color.lightSkyBlue,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(15),
  },
  opbTitleHeading: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.p3, 667),
    marginBottom: verticalScale(5),
  },
  opbTitleDescription: {
    fontFamily: fonts.regular,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p5, 667),
  },
  bottomView: {
    borderRadius: moderateScale(10),
    backgroundColor: color.lightSkyBlue,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(8),
  },
  bottomViewItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: verticalScale(10),
    borderBottomColor: color.grey,
  },
  dotView: {
    width: horizontalScale(4),
    height: horizontalScale(4),
    borderRadius: moderateScale(50),
    backgroundColor: color.black,
    marginHorizontal: horizontalScale(12),
    marginTop: verticalScale(8),
  },
  bottomViewText: {
    fontSize: RFValue(sizes.p5, 667),
    fontFamily: fonts.regular,
    color: color.lightBlack,
    width: '91%',
  },
  buttonView: {
    marginVertical: verticalScale(10),
  },
  actionButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forumButtonView: {
    width: '49%',
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  forumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(12),
  },
  buttonText: {
    fontFamily: fonts.regular,
    color: color.white,
    fontSize: RFValue(sizes.p5, 667),
  },
  deleteButton: {
    borderWidth: 1,
    borderRadius: moderateScale(8),
    borderColor: color.red,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
  },
  deleteText: {
    fontFamily: fonts.medium,
    color: color.red,
    fontSize: RFValue(sizes.p5, 667),
  },
  goBackButtonView: {
    borderWidth: 1,
    borderColor: color.darkSkyBlue,
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackButtonText: {
    fontFamily: fonts.medium,
    color: color.darkSkyBlue,
  },
});
