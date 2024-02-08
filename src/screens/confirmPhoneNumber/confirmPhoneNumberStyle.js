import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { fonts } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../constants/fontSize';


export const confirmPhoneNumberStyle = StyleSheet.create({
  confirmPhoneMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(18),
  },
  confirmphoneNumberTopView: {
    marginVertical: verticalScale(30),
    height: '72%',
  },
  confirmphoneNumberTopText: {
    fontFamily: fonts.medium,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p5, 667),
    width: '90%',
    lineHeight: verticalScale(15),
  },

  userPhoneNumber: {
    marginVertical: verticalScale(20),
    color: color.black,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h6, 667),
  },

  inputHeading: {
    color: color.black,
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.p3, 667),
  },
  input: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    color: color.blue_brand,
    backgroundColor:color.white,
    paddingHorizontal: horizontalScale(10),
    fontFamily:fonts.medium
  },
  resendCodeText:{
    fontFamily:fonts.semiBold,
    color:color.lightGreen,
    textDecorationLine:"underline",
    alignSelf:"center",
    fontSize:RFValue(sizes.p4,667),
    marginVertical:verticalScale(10)
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    borderRadius: 10,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(2),
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: color.white,
    fontSize: RFValue(sizes.p2, 667),
  },
});
