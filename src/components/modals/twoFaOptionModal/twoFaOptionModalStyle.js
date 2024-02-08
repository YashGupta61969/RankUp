import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../constants/dimension';
import { color } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../../constants/fontSize';

export const twoFaOptionModalStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText:{
    fontFamily:fonts.medium,
    color:color.lightBlack,
    marginVertical:verticalScale(10),

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
  crossView:{
   alignSelf:"flex-end"
  },
  optionButtonMain:{
    paddingVertical:verticalScale(15),
    paddingHorizontal:horizontalScale(10),
    backgroundColor:color.grey,
    marginBottom:verticalScale(10),
    borderRadius:moderateScale(10)
  },
  optionButtonText:{
    color:color.lightBlack,
    fontFamily:fonts.medium,
    fontSize:RFValue(sizes.p6,667)
  }
});
