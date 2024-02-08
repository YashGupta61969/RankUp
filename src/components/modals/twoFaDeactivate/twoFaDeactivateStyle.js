import {StyleSheet} from 'react-native';
import { color } from '../../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../../constants/dimension';
import { fonts } from '../../../constants/fonts';
import { sizes } from '../../../constants/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';



export const twoFaDeactivateStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModal: {
    backgroundColor: color.white,
    width:"90%",
    height:"20%",
    paddingVertical: verticalScale(15),
    paddingHorizontal:horizontalScale(10),
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: moderateScale(10),
    borderWidth:1
  },
  successTextView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h8, 667),
    textAlign:"center"
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop:verticalScale(15)
  },
  confirmButton: {
    width: horizontalScale(60),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor:color.red
  },
  cancelButton: {
    width: horizontalScale(60),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth:1,
    borderColor:color.darkBlue,
    marginRight:horizontalScale(20)
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    color: color.black,

  },
  confirmButtonText:{
    color:color.white,
    fontFamily: fonts.semiBold,
  }
});
