import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {color} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import { sizes } from '../../../constants/fontSize';

export const twoFaAuthenticationStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModal: {
    backgroundColor: color.white,
    width: '90%',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  successTextView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h8, 667),
    textAlign: 'center',
  },

  cancelButton: {
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: verticalScale(5),
    paddingVertical: verticalScale(8),
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },
  resendOtpText: {
    color: color.lightGreen,
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: verticalScale(5),
  },
  errorMessageStyle: {
    color: color.red,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p6, 667),
    marginVertical: verticalScale(3),
  },
});
