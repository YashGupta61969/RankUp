import {StyleSheet} from 'react-native';
import {color} from '../../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../../constants/fontSize';
import {fonts} from '../../../constants/fonts';

export const mergeModalStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModal: {
    backgroundColor: color.white,
    width: '90%',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  mergedModalTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: verticalScale(5),
    paddingHorizontal: horizontalScale(15),
    borderColor: color.darkGrey,
  },

  mainText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.p2, 667),
  },

  mergedModalBottom: {
    paddingHorizontal: horizontalScale(10),
  },
  confirmationText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: fonts.regular,
    width: '70%',
    color: color.black,
    marginTop: verticalScale(15),
    fontSize: RFValue(sizes.p4, 667),
  },
  titleText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.p4, 667),
    marginTop: verticalScale(10),
  },
  inputBox: {
    borderWidth: 1,
    borderColor: color.darkGrey,
    borderRadius: moderateScale(5),
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(30),
    color: color.black,
    fontFamily: fonts.medium,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: color.darkGrey,
    paddingTop: verticalScale(12),
    paddingHorizontal: horizontalScale(10),
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '49%',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    borderColor: color.darkSkyBlue,
  },
  cancelButtonText: {
    fontFamily: fonts.medium,
    color: color.darkSkyBlue,
  },
  saveButtonView: {
    borderRadius: 10,
    width: '49%',
    overflow: 'hidden',
  },
  saveButton: {
    width: '100%',
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontFamily: fonts.medium,
    color: color.white,
    fontSize: RFValue(sizes.p2, 667),
  },
});
