import {StyleSheet} from 'react-native';
import { color } from '../../../constants/colors';
import { horizontalScale, verticalScale } from '../../../constants/dimension';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../../constants/fontSize';
import { fonts } from '../../../constants/fonts';



export const signupStyle = StyleSheet.create({
  loginMain: {
    flex: 1,
    backgroundColor: color.lightSkyBlue,
    paddingVertical: verticalScale(15),
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
  },
  loginHeadingView: {
    // minHeight: verticalScale(140),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:verticalScale(20)
  },
  loginHeadingtext: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h4, 667),
  },
  formView: {
    paddingHorizontal: horizontalScale(15),
  },

  inputBoxView: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    justifyContent: 'space-between',
    backgroundColor: color.white,
    // height:verticalScale(40),
    marginVertical:verticalScale(8),
  },
  inputHeading:{
   fontFamily:fonts.medium,
   color:color.black
  },
  input: {
    fontFamily: fonts.medium,
    width: '100%',
    paddingLeft:horizontalScale(10),
    color:color.black
  },
  errorText: {
    color: 'red',
    fontFamily: fonts.medium,
    fontSize:RFValue(sizes.p5,667)
  },
  passwordView:{
   marginVertical:verticalScale(5)
  },
  buttonView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:verticalScale(10),
    borderRadius:10,
    marginTop:verticalScale(10),
    marginBottom:verticalScale(2)
  },
  buttonText:{
    fontFamily:fonts.medium,
    color:color.white,
    fontSize:RFValue(sizes.p2,667)
  },
  createAccountView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:verticalScale(10)
  },
  createAccountText:{
    fontFamily:fonts.semiBold,
    borderColor:color.darkSkyBlue,
    borderBottomWidth:1,
    fontSize:RFValue(sizes.p2,667),
    color:color.darkSkyBlue,
    fontWeight:"600"
  },
  accountText:{
    fontFamily:fonts.medium,
    color:color.black,
    marginRight:horizontalScale(10)
  }
});
