import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/dimension';
import { color } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { sizes } from '../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';


export const smsAuthenticationStyle = StyleSheet.create({
  smsAuthenticationMain: {
    flex: 1,
    paddingHorizontal: horizontalScale(17),
    paddingTop: verticalScale(10),
    backgroundColor: color.white,
  },
  smsTopView:{
    height:"83%",
  },

  smsAuthenticationText: {
    fontFamily: fonts.medium,
    textAlign: 'center',
    color: color.blue_brand,
    fontSize: RFValue(sizes.p3, 667),
    marginTop: verticalScale(40),
    marginBottom: verticalScale(20),
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: horizontalScale(40),
    height: verticalScale(38),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    backgroundColor: color.white,
    color: color.black,
    fontFamily: fonts.medium,
    borderColor: color.black,
  },

  underlineStyleHighLighted: {
    borderColor: 'skyblue',
  },
  resendText: {
    color: color.lightGreen,
    fontFamily: fonts.semiBold,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelButton:{
    borderWidth:1,
    borderColor:color.darkBlue,
    width:"48%",
    paddingVertical:verticalScale(10),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:moderateScale(5)
  },
  cancelButtonText:{
    fontFamily:fonts.medium,
    color:color.blue,
    fontSize:RFValue(sizes.p3,667)
  },
  verifyButton:{
    width:"48%",
    backgroundColor:color.red,
    paddingVertical:verticalScale(10),
    alignItems:"center",
    borderWidth:1,
    borderColor:color.red,
    borderRadius:moderateScale(5)
  },
  verifyButtonText:{
    fontFamily:fonts.medium,
    color:color.white
  }
});
